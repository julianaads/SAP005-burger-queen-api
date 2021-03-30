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
    
  const {
        userId, 
        clientName, 
        table, 
        status, 
        
      } = req.body;

      models.Orders.create({
        userId,
        clientName,
        table,
        status,
        processedAt:new Date(),
      })
        .then((result) => {
          res.status(201).json(result);
        })
        .catch(() => res.status(400).json({
          message: 'algo de errado não está certo',
        }));
    }

    const ordersById = async (req, res) => {
      // try {
      //   const posts = await models.Orders.findAll({
      //     include: [
      //       {
      //         model: models.Products,
      //         as: 'Orders'
      //       },
      //       {
      //         model: models.User,
      //         attributes:['username', 'id']
      //       }
      //     ]
      //   });
      //   return res.status(200).json({ posts });
      // } catch (error) {
      //   return res.status(500).send(error.message);
      // }

        try {
          const { uid } = req.params;
          const idOrders = await models.Orders.findOne({
            where: { id: uid},
          });
          if (idOrders) {
            return res.status(200).json({ idOrders });
          }
          return res.status(404).send('Não localizamos este ID');
        } catch (error) {
          return res.status(500).send(error.message);
        }
      }

    const deleteOrders = async (req, res) => {
        try {
          const { uid } = req.params;
          const deleted = await models.Orders.destroy({
            where: { id: uid }
          });
          if (deleted) {
            return res.status(200).send("Sua ordem foi removida");
          }
          throw new Error("Oops...Não localizamos essa ordem");
        } catch (error) {
          return res.status(500).send(error.message);
        }
      };

      const updateOrders = async (req, res) => {
        try {
          const { uid } = req.params;
          const [ updated ] = await models.Orders.update(req.body, {
            where: { id: uid }
          });
          if (updated) {
            const updatedOrders = await models.Orders.findOne({ where: { id: uid } });
            return res.status(200).json({ post: updatedOrders });
          }
          throw new Error('Oops...Não foi possível localizar o produto');
        } catch (error) {
          return res.status(500).send(error.message);
        }
      };

module.exports = {postNewOrder, findAllOrders, deleteOrders, ordersById, updateOrders}