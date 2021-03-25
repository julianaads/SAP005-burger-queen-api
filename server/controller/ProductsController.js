// aqui vai o código que acessa o banco de dados

const models = require('../db/models')

const findAllProducts = async (req, res) => {
    try {
      const allProducts = await models.Products.findAll({
        raw: true,
        attributes: {
          exclude: ['password']
        }
      })
      if (allProducts.length > 0) {
        res.json(allProducts)
      } else {
        res.json({
          message: "Nenhum produto encontrado"
        })
      }
    } catch (err) {
      console.log(err)
    }
  }

  const productsById = async (req, res) => {
    try {
      const { uid } = req.params;
      const idProducts = await models.Products.findOne({
        where: { id: uid},
      });
      if (idProducts) {
        return res.status(200).json({ idProducts });
      }
      return res.status(404).send('Nenhum Produto encontrado com este ID');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
  
  const postNewProduct = async (req, res) => {
    try {
      const product = await models.Products.create(req.body);
      return res.status(201).json({
        product,
      });
    } catch (error) {
      return res.status(500).json({error: error.message})
    }
  }
  
  const deleteProduct = async (req, res) => {
    try {
      const { uid } = req.params;
      const deleted = await models.Products.destroy({
        where: { id: uid }
      });
      if (deleted) {
        return res.status(204).send("User deleted");
      }
      throw new Error("User not found");
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  
  const updateProduct = async (req, res) => {
    try {
      const { uid } = req.params;
      const [ updated ] = await models.Products.update(req.body, {
        where: { id: uid }
      });
      if (updated) {
        const updatedProducts = await models.User.findOne({ where: { id: uid } });
        return res.status(200).json({ post: updatedProducts });
      }
      throw new Error('Product not found');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };


  module.exports = { findAllProducts, productsById, postNewProduct, deleteProduct, updateProduct}