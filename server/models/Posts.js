//Posts model definition for Sequelize ORM

module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define('Posts', { //define model name
    title: {
      type: DataTypes.STRING, //data type
      allowNull: false //does not allow nulls
    },
    postText: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'posts',//specify table name
    timestamps: true //automatically adds createdAt and updatedAt fields in table
  });

  return Posts;
};
