const models = require('../db/models')


const findAllOrders = async (req, res) => {
    try {
      const allOders = await models.Orders.findAll({
        raw: true,
        attributes: {
          exclude: ['password']
        }
      })
      if (allOders.length > 0) {
        res.json(allOders)
      } else {
        res.json({
          message: "Nenhuma ordem encontrada"
        })
      }
    } catch (err) {
      console.log(err)
    }
  }

const postNewOrder = async (req, res) => {
    try {
      const order = await models.Orders.create(req.body);
      return res.status(201).json({
        order,
      });
    } catch (error) {
      return res.status(500).json({error: error.message})
    }
  }

module.exports = {postNewOrder, findAllOrders}