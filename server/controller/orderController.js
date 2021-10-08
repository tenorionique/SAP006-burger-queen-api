const getAllOrders = (req, res) => {
    res.status(200).send({
        message:'Usando o GET dentro da rota de orders',
    });
};

const getOrderById = (req, res) => {
    const id = req.params.orderId;
    res.status(200).send({
        message:'Usando o GET para escolher pedido pelo Id',
        id: id,
    });
};

const postOrders = (req, res) => {
    res.status(201).send({
        message: 'Usando o POST dentro da rota de orders',
    });
};

const putOrder = (req, res) => {
    const id = req.params.orderId;
    res.status(201).send({
        message:'Usando o PUT dentro da rota de orders',
        id: id,
    });
};

const deleteOrder = (req, res) => {
    const id = req.params.orderId;
    res.status(201).send({
        message:'Usando o DELETE dentro da rota de orders',
        id: id,
    });
};

module.exports = {
    getAllOrders,
    getOrderById,
    postOrders,
    putOrder,
    deleteOrder,
}