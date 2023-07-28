const { error } = require('console');
var dbConn = require('../../config/db.config');


var crypto = require("crypto");

exports.register = function(username, password, cbFunc) {
    var shaPass = crypto.createHash("sha256").update(password).digest("hex");

    const query = `INSERT INTO users (username, user_password) VALUES ('${username}', '${shaPass}')`;

    dbConn.query(query, (error, response)=>{
        console.log(error)
        console.log(response);
        cbFunc(response)
    });
}



exports.isUserExist = function(username, password, callback) {
    var shaPass = crypto.createHash("sha256").update(password).digest("hex");

    const getUserQuery = `SELECT * FROM users WHERE username = '${username}' AND user_password = '${shaPass}'`;
    const checkUsrcbFunc = (error, response, fields) => {
        console.log(response);
        
       console.log("length ...." + response.length > 0  );
        callback( response
            ? response.length > 0
            : false
        )
    };

    dbConn.query(getUserQuery, checkUsrcbFunc);
}

exports.isUserNameExist = function(username, callback) {

    const getUserQuery = `SELECT * FROM users WHERE username = '${username}'`;
    const checkUsrcbFunc = (error, response, fields) => {
        console.log(response);
        
       console.log("length ...." + response.length > 0  );
        callback( response
            ? response.length > 0
            : false
        )
    };

    dbConn.query(getUserQuery, checkUsrcbFunc);
}