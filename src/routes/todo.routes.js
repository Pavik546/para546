const express = require('express')
const router = express.Router();
const app = express();
const oAuthService = require("../auth/tokenService");

const todoController =   require('../controllers/todo.controller');
const authenticator = require('../auth/authenticator');
// Retrieve all todo
router.get('/todo', todoController.findAll);
// Create a new todo
router.post('/todo', todoController.create);
// Retrieve a single todo with id
router.get('/todo/:id', todoController.findById);
// Update a todo with id
router.put('/todo/:id',  todoController.update);
// Delete a todo with id
router.delete('/todo/:id', todoController.delete);
router.post("/register", authenticator.registerUser);
router.post("/login",  authenticator.login);
router.get('/', (req, res) => {
    res.send('home page')
  })


module.exports = router