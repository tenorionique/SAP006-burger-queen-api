const { User } = require("../db/models");

const getAllUsers = async (req, res) => {

  const users = await User.findAll({
    attributes: {
      exclude: "password",
    },
  });
  return res.status(200).send(users);
};

const getUserById = async (req, res) => {

  const { uid } = req.params;
  const findUid = await User.findOne({
    where: {
      id: uid,
    },
  });

  if (findUid === null) {
    return res.status(404).send({
      message: "User not found",
    });
  }

  const user = await User.findOne({
    attributes: {
      exclude: "password",
    },
    where: {
      id: uid,
    },
  });
  res.status(200).send(user);
};

const postUsers = async (req, res) => {

  const { name, password, email, role, restaurant } = req.body;

  if (!name || !password || !role) {
    return res.status(400).send({
      message: "Missing required data",
    });
  }

  let ExistentUser = await User.findOne({
    where: {
      email,
    },
  });
  
  if (ExistentUser) {
    return res.status(403).send({
      message: "Email already in use",
    });
  }

  const createNewUser = await User.create({
    name,
    password,
    email,
    role,
    restaurant,
  });
  return res.status(201).send(createNewUser);
};

const putUser = async (req, res) => {
  const { name, email, role, restaurant } = req.body;
  const { uid } = req.params;

  if (!name || !email || !role) {
    return res.status(400).send({
      message: "Missing required data",
    });
  }

  const update = await User.update(
    {
      name,
      email,
      role,
      restaurant,
    },
    {
      where: {
        id: uid,
      },
    }
  );
  return res.status(201).send(update);
};

const deleteUser = async (req, res) => {
  const { uid } = req.params;

  let checkId = await User.findOne({
    where: {
      id: uid,
    },
  });
  if (!checkId) {
    return res.status(404).send({
      message: "User not found",
    });
  }

  const deleteUserById = await User.destroy({
    where: {
      id: uid,
    },
  });
  return res.status(201).send({ message: "Deletado", deleteUserById });
};

module.exports = {
  getAllUsers,
  getUserById,
  postUsers,
  putUser,
  deleteUser,
};
