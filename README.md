# para546
* node-mysql-crud-app

   In this repo, I have created the restful api using node js, express, and MySQL

   Author: Pavithra Muppidathi

* MySQL configuration

   Make the changes in the config/db.config.js file.

* In the project directory, you can run:

   npm install

   This will install the dependencies inside node_modules

   node server.js OR nodemon start OR npm start

* In the Mysql workbench

   Use database.txt and run the query


* In postman

  POST-http://localhost:5000/auth/register for registering new user (In body type username and password)
  
  POST-http://localhost:5000/auth/login for login user (In body type registered username and password) it will generate a token
  
  GET-http://localhost:5000/api/v1/todo - to Retrieve a todo list of items
  
  GET-http://localhost:5000/api/v1/todo/1 -to Retrieve a todo list of items by id
  
  POST-http://localhost:5000/api/v1/todo-to create a new todo item
  
  PUT-http://localhost:5000/api/v1/todo/1 -to update the todo item
  
  DELETE-http://localhost:5000/api/v1/todo/1 -to delete the todo item by id
  
  
  
  
  
  
  
  

