     //7                         //1  
module.exports = function (sequelize, DataTypes) {     //2   //3 
  return sequelize.define('books', {
    nameOfBook: DataTypes.STRING,
    author: DataTypes.STRING,
    genre: DataTypes.STRING,
    pubYear: DataTypes.INTEGER,
    rating: DataTypes.INTEGER
  });
};