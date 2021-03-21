// aqui vai o código que acessa o banco de dados

const bdUsers = [
  { id: 1, 
    username: 'Carla Diaz', 
    email: 'diazcarla@gmail.com',
    role: 'cozinheira'

},
  { id: 2, 
    username: 'João Luiz', 
    email: 'jluiz@gmail.com',
    role: 'atendente' 
  }, 
  { id: 3, 
    username: 'Camila de Lucas', 
    email: 'camiladl@gmail.com',
    role:"cozinheira"
  },
  { id: 4, 
    username: 'Juliete Freire', 
    email: 'jufreire@gmail.com',
    role: 'atendente',
  }
]


const getAllUsers = (req, res) => {
  res.send(bdUsers)
}

module.exports = { getAllUsers}