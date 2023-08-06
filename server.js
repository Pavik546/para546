const express = require('express');
const passport = require('passport')

const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

    const userDB = require('./src/auth/userDb')
    
// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 3000;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())

app.use(cookieParser())
app.use(passport.initialize());

// Add this line below
var opts = {}
opts.jwtFromRequest = function(req) {
    var token = null;
    if (req && req.cookies)
    {
        token = req.cookies['jwt'];
    }
    return token;
};
opts.secretOrKey = 'secret';



passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    console.log("JWT BASED  VALIDATION GETTING CALLED")
    console.log("JWT", jwt_payload)
    userDB.isUserExist(jwt_payload.data.username, jwt_payload.data.password, (isValidUser) =>   {
        return isValidUser ?  done(null, jwt_payload.data): done(null, false); 
  });
}));

passport.serializeUser(function(user, cb) {
  console.log('I should have jack ')
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  console.log('I wont have jack shit')
  cb(null, obj);
});
// define a root route
app.get('/', (req, res) => {
  res.send("Hello World");
});
// Require employee routes
const todoRoutes = require('./src/routes/todo.routes')
const authRoutes = require('./src/routes/auth.routes')
// using as middleware
app.use('/api/v1/todo',passport.authenticate('jwt', { session: false }), todoRoutes);
app.use("/auth", authRoutes)
// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
