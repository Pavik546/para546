'use strict';
var dbConn = require('../../config/db.config');
//Todo object create
var Todo = function(todo){
  this.Id     = todo.Id;
  this.Name     = todo.Name;
  this.Email          = employee.Email;
  this.Phone          = todo.Phone;
  this.Title          = todo.Title;
  this.Decsription    = todo.Description;
  this.status         = todo.status ? todo.status : 1;
  this.Created_at     = new Date();
  this.Updated_at     = new Date();
};
Todo.create = function (newTod, result) {
dbConn.query("INSERT INTO todo set ?", newEmp, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  console.log(res.insertId);
  result(null, res.insertId);
}
});
};
Todo.findById = function (Id, result) {
dbConn.query("Select * from todo where Id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
Todo.findAll = function (result) {
dbConn.query("Select * from todo", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('todo : ', res);
  result(null, res);
}
});
};
Todo.update = function(Id, todo, result){
dbConn.query("UPDATE todo SET Name=?,Email=?,Phone=?,Title=?,Description=? WHERE id = ?", [todo.Name,todo.Email,todo.Phone,todo.title,todo.Description, Id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};
Todo.delete = function(Id, result){
dbConn.query("DELETE FROM todo WHERE Id = ?", [Id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};
module.exports= Todo;