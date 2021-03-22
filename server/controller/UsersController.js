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

const getDeleteUsers = (req, res) => {
let id = Number(req.params.id)
  const newBdUsers = bdUsers.filter(data => data.id != id)
  res.send(newBdUsers)
  console.log(id)  
}

const getPostUser = (req, res) => {
  const body = req.body;
  if(!body){
    res.status(400).end();
  } else { 
    bdUsers.push(body);
    res.send(body);
  }
}

module.exports = { getAllUsers, getPostUser, getDeleteUsers}