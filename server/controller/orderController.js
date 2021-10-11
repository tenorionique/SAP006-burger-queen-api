const { Order, ProductOrder, User } = require('../db/models');

const getAllOrders = async (req, res) => {
    const orders = await Order.findAll();
    res.status(200).send(orders);
  };
  

const getOrderById =  async (req, res) => {
    const id = req.params.orderId;
    const order = await Order.findByPk(id, { include: [User, ProductOrder] });
    res.status(200).send(order);
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