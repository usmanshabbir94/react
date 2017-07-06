'use strict';
module.exports = function(sequelize, DataTypes) {
  var todos = sequelize.define('todos', {
    content: DataTypes.STRING,
    completed: DataTypes.BOOLEAN,
    userid: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return todos;
};
