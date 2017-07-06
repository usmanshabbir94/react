let express = require('express')

let router = express.Router()

const { users } = require('../../models')

// const { ResourceNotFound } = require('../errors')

// const { toSite } = require('../serializers')

router.post('/', (req, res, next) => {

  // app.post('/login', (req, res) => res.status(200).send({
    users.findOne({ where: {username: req.body.email} })
    .then(project => {
      console.log(project)
      // project will be the first entry of the Projects table with the title 'aProject' || null
    })
    //   // .findOne({ where: {username: req.body.email && password: req.body.password} })
      // .then(result => {
      //   console.log(result.id);
      // console.log(User);

})

module.exports = router
