const { Order, ProductOrder, User } = require("../db/models");

const getAllOrders = async (req, res) => {
  const orders = await Order.findAll();
  return res.status(200).send(orders);
};

const getOrderById = async (req, res) => {
  const id = req.params.orderId;
  const order = await Order.findByPk(id, { include: [User, ProductOrder] });
  return res.status(200).send(order);
};

const postOrders = async (req, res) => {
  const { client_name, table, status, user_id, products } = req.body;

  if (!client_name || !table) {
    return res.status(400).send({
      message: "Missing required data",
    });
  }
  const newOrder = await Order.create({
    client_name,
    table,
    status,
    user_id,
  });

  const productsnew = products.map(product => ({
    product_id: product.id,
    order_id: newOrder.id,
    

  }))

 await ProductOrder.bulkCreate(productsnew)

  res.status(201).send(newOrder);
};

const putOrder = async (req, res) => {
  const { client_name, table, status } = req.body;
  const { orderId } = req.params;
  const updateOrder = await Order.update(
    {
      client_name,
      table,
      status,
    },
    {
      where: {
        id: orderId,
      },
    }
  );
  return res.status(201).send(updateOrder);
};

const deleteOrder = async (req, res) => {
  const { orderId} = req.params;
  const deleteOrderById = await Order.destroy({
    where:{
      id: orderId
    }
  })
 return res.status(201).send(deleteOrderById);
};

module.exports = {
  getAllOrders,
  getOrderById,
  postOrders,
  putOrder,
  deleteOrder,
};
