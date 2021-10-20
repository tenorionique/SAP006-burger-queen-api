const { Product } = require("../db/models");

const getAllProducts = async (req, res) => {
  const allProducts = await Product.findAll();
  res.status(200).send(allProducts);
};

const getProductsById = async (req, res) => {
  const { productsId } = req.params;
  const productsById = await Product.findByPk(productsId);

  return res.status(200).send(productsById);
};

const postProducts = async (req, res) => {
  const { name, flavor, complement, price, image, type, sub_type } = req.body;
  const addProducts = await Product.create({
    name,
    flavor,
    complement,
    price,
    image,
    type,
    sub_type,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  return res.status(201).send({ message: "Criado", addProducts });
};

const putProducts = async (req, res) => {
  const { productsId } = req.params;

  const productIsThere = await Product.findByPk(productsId);

  if (!productIsThere) {
    return res.status(400).send({
      message: "Missing required or new data",
    });
  }
  const { name, flavor, complement, price, image, type } = req.body;
  const product = await Product.update(
    {
      name,
      flavor,
      complement,
      price,
      image,
      type,
      updatedAt: new Date(),
    },
    {
      where: {
        id: productsId,
      },
    }
  );
  return res.status(201).send({ message: "Updated", product });
};

const deleteProducts = async (req, res) => {
  const { productsId } = req.params;

  const productIsThere = await Product.findByPk(productsId);

  if (!productIsThere) {
    return res.status(403).send({
      message: "Product not found",
    });
  }
  
  const productToDelete = await Product.destroy({
    where: {
      id: productsId,
    },
  });
  return res.status(201).send({ message: "Deleted", productToDelete });
};

module.exports = {
  getAllProducts,
  getProductsById,
  postProducts,
  putProducts,
  deleteProducts,
};
