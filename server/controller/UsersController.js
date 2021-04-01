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
      res.json({ message: 'Nenhum usuário encontrado' })
    }
  } catch (err) {
    console.log(err)
  }
}

const usersById = async (req, res) => {
  try {
    const { uid } = req.params;
    const idUser = await models.User.findOne({
      where: { id: uid },
    });
    if (idUser) {
      return res.status(200).json({ idUser });
    }
    return res.status(404).send('Nenhum usuário encontrado com este ID');
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const postNewUser = async (req, res) => {
  try {
    const post = await models.User.create(req.body);
    return res.status(201).json({
      post,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const deleteUser = async (req, res) => {
  try {
    const { uid } = req.params;
    const deleted = await models.User.destroy({
      where: { id: uid }
    });
    if (deleted) {
      return res.status(200).send('Usuário Removido');
    }
    throw new Error('Ops...Usuário não localizado');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const { uid } = req.params;
    const [updated] = await models.User.update(req.body, {
      where: { id: uid }
    });
    if (updated) {
      const updatedUser = await models.User.findOne({ where: { id: uid } });
      return res.status(200).json({ post: updatedUser });
    }
    throw new Error('Oops...Não foi possível localizar o usuário');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = { findAll, postNewUser, deleteUser, updateUser, usersById }