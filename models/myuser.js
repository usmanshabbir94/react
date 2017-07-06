'use strict';
module.exports = function(sequelize, DataTypes) {
  var MyUser = sequelize.define('MyUser', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return MyUser;
};