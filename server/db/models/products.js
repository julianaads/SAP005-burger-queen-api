'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Products.hasMany(models.ProductsOrders,{
      //   foreignKey:"id"
      // })
      Products.belongsToMany(models.Orders, {
        through: 'ProductsOrders',
        foreignKey: 'productId'
    })
  };
}
  Products.init({
    Name: DataTypes.STRING,
    Price: DataTypes.DECIMAL,
    Flavor: DataTypes.STRING,
    Complement: DataTypes.STRING,
    Image: DataTypes.STRING,
    Type: DataTypes.STRING,
    Subtype: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};