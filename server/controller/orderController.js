const {
  Order,
  ProductOrder,
  Product,
} = require("../db/models");

const getOrderWithProducts = (id) =>
  Order.findByPk(id, {
    include: [
      {
        model: Product,
        as: "Products",
        required: false,
        attributes: ["id", "name", "flavor", "complement"],
        through: {
          model:ProductOrder,
          as: "ProductOrder",
          attributes: ["qtd"],
        },
      },
    ],
  });

const getAllOrders = async (req, res) => {
  const orders = await Order.findAll();
  return res.status(200).send(orders);
};

const getOrderById = async (req, res) => {
  const id = req.params.orderId;
  const order = await getOrderWithProducts(id);
  return res.status(200).send(order);
};

const postOrders = async (req, res) => {
  const { client_name, user_id, table, products } = req.body;

  const order = await Order.create({
    client_name,
    table,
    user_id,
    status: "pending",
    processedAt: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  const items = products.map((product) => ({
    order_id: order.id,
    product_id: product.id,
    qtd: product.qtd,
  }));

  await ProductOrder.bulkCreate(items);

  const newOrder = await getOrderWithProducts(order.id);

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
      updatedAt: new Date()
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
