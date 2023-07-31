const userDB = require('./userDb')
const jwt = require('jsonwebtoken')
'use strict';


exports.registerUser = function (req, res) {
    userDB.isUserNameExist(req.body.username, (isExist) => {
        if ( isExist) {
            sendResponse(res, "This user already exists!");

            return;
        }

        userDB.register(req.body.username, req.body.password, (response) => {
            console.log(response);
            sendResponse(
                res,
                response && !response.error  ? "Success!!" : "Something went wrong!",
                response.error
            );
        });
    });
}
exports.login = function( req, res) {
    console.log(req);
    userDB.isUserExist(req.body.username, req.body.password, (isUserExist) =>{
        if (isUserExist)
        {
            let token =    jwt.sign({
                data: req.body
                }, 'secret', { expiresIn: '1h' });
            res.cookie('jwt', token)
            res.send({"token":token})
        }else{
            res.send('Invalid login credentials')
        }
    });
}

function CheckUser(username, password){
  
        if(userDB.isUserExist(username, password))
        {
            console.log('User found in DATA')
            return true
        }
        else{
            return false;
        }
    
      }
   
sendResponse = function(res, message, error) {
    res.status(error !== undefined ? 400 : 200).json({
        message: message,
        error: error,
    });
}