module.exports.up = (queryInterface, DataTypes) => {
// create a table
  return queryInterface.createTable(
    "chefs", {
    id: {
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true
    },
    name: {
      allowNull: false,
      type: DataTypes.INTEGER.UNSIGNED
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    deletedAt: {
      allowNull: true,
      type: DataTypes.DATE
    }
  }, {
      charset: "utf8"
    })
}

module.exports.down = (queryInterface) => {
  // drop the table
  return queryInterface.dropTable("chefs")
}