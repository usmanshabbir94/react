const Model = require('../../models');
const User = Model.MyUser;
const Todo = Model.todos;
module.exports = (app) => {
  app.post('/login', (req, res) => {
    User.findOne({
      where: {
        username: req.query.email ,
        password: req.query.password
      }
    })
    .then(result => {
      res.send(200,result.id);
      res.end();
    })
  })

  app.get('/userdata', (req, res) => {
    Todo.findAll({
      where: {
        userid: req.query.id
      }
    })
    .then(result => {
      res.send(200,result);
      res.end();
    })
  })
  app.post('/addingtodo', (req, res) => {
    Todo.upsert({
      content:req.query.text,
      completed:false,
      userid:req.query.userid
    })
    .then(result => {
      res.send(200,result);
      res.end();
    })
  })
  app.post('/completetodo', (req, res) => {
    Todo.update({
      completed:req.query.text
    },{
    where:{
      id:req.query.id
    }})
    .then(result => {
      res.send(200,result);
      res.end();
    })
  })
  app.post('/deletetodo', (req, res) => {
    Todo.destroy({
    where:{
      id:req.query.id
    }})
    .then(result => {
      res.send(200,result);
      res.end();
    })
  })
};
