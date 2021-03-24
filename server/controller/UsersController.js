// aqui vai o código que acessa o banco de dados

const models = require('../db/models')

const findAll = async (req, res) => {
  try {
    const allUsers = await models.User.findAll({
      raw: true,
      attributes: {
        exclude: ['password']
      }
    })
    if (allUsers.length > 0) {
      res.json(allUsers)
    } else {
      res.json({
        message: "Nenhum usuário encontrado"
      })
    }
  } catch (err) {
    console.log(err)
  }
}

const postNewUser = async (req, res) => {
  try {
    const post = await models.User.create(req.body);
    return res.status(201).json({
      post,
    });
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}

// const bdUsers = [
//   { id: 1, 
//     username: 'Carla Diaz', 
//     email: 'diazcarla@gmail.com',
//     role: 'cozinheira'

// },
//   { id: 2, 
//     username: 'João Luiz', 
//     email: 'jluiz@gmail.com',
//     role: 'atendente' 
//   }, 
//   { id: 3, 
//     username: 'Camila de Lucas', 
//     email: 'camiladl@gmail.com',
//     role:"cozinheira"
//   },
//   { id: 4, 
//     username: 'Juliete Freire', 
//     email: 'jufreire@gmail.com',
//     role: 'atendente',
//   }
// ]


// const getAllUsers = (req, res) => {
//   res.send(bdUsers)
// }

// const getDeleteUsers = (req, res) => {
// let id = Number(req.params.id)
//   const newBdUsers = bdUsers.filter(data => data.id != id)
//   res.send(newBdUsers)
//   console.log(id)  
// }

// const getPostUser = (req, res) => {
//   const body = req.body;
//   if(!body){
//     res.status(400).end();
//   } else { 
//     bdUsers.push(body);
//     res.send(body);
//   }
// }

module.exports = { findAll, postNewUser}