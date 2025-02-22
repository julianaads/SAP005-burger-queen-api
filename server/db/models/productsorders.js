'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductsOrders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Orders.belongsToMany(models.Products, {
        through: 'ProductsOrders',
        foreignKey: 'orderId',
      })

      models.Products.belongsToMany(models.Orders, {
        through: 'ProductsOrders',
        foreignKey: 'productId',
      })
    }
  };
  ProductsOrders.init({
    orderId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    qtd: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProductsOrders',
  });
  return ProductsOrders;
};