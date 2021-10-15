const { Order, ProductOrder, User } = require("../db/models");
const product = require("../db/models/product");

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
  const { client_name, table, products } = req.body;

  const orderId = Order.creat({ client_name, table, status: "pending" });

  const items = products.map((product) => ({
    order_id: orderId,
    product_id: product.id,
    qtd: product.qtd,
  }));
  
  await ProductOrder.bulkCreate(items);
  //criar um negocio que busca pedido

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
  const { orderId } = req.params;
  const deleteOrderById = await Order.destroy({
    where: {
      id: orderId,
    },
  });
  return res.status(201).send(deleteOrderById);
};

module.exports = {
  getAllOrders,
  getOrderById,
  postOrders,
  putOrder,
  deleteOrder,
};
