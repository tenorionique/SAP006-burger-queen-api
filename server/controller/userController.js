const getAllUsers = (req, res) => {
    res.status(200).send({
        message:'Usando o GET dentro da rota de users',
    });
};

const getUserById = (req, res) => {
    const id = req.params.uid;
    res.status(200).send({
        message:'Usando o GET de um usuário pelo Id',
        id: id,
    });
};

const postUsers = (req, res) => {
    res.status(201).send({
        message: 'Usando o POST dentro da rota de users',
    });
};

const putUser = (req, res) => {
    const id = req.params.uid;
    res.status(201).send({
        message:'Usando PUT dentro da rota de users',
        id: id,
    });
};

const deleteUser = (req, res) => {
    const id = req.params.uid;
    res.status(201).send({
        message: 'Usando DELETE dentro da rota de users',
        id: id,
    });
};

module.exports = {
    getAllUsers,
    getUserById,
    postUsers,
    putUser,
    deleteUser
}