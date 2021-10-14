const { Products } = require("../db/models");
const getAllProducts = async(req, res) => {
    const allProducts = await Products.findAll()
    res.status(200).send(allProducts);
};

const getProductsById = async (req, res) => {
    const { productsId } = req.params;
    const productsById = await Products.findByPk({
        where: {
            id: productsId
        }
    })
    return res.status(200).send(productsById);
};

 const postProducts = async (req, res) => {
     const { name, flavor, complement, price, image, type, subtype } = req.body;
     const addProducts = await Products.creat({
         name,
         flavor,
         complement,
         price,
         image,
         type,
         subtype
     })
     return res.status(201).send(addProducts);
};

const putProducts = async (req, res) => {
    const { productsId } = req.params;
    const  { name, flavor, complement, price, image, type, subtype } = req.body;
    const product = await Products.update({
        name,
        flavor,
        complement,
        price,
        image,
        type,
        subtype
    },
    {
        where: {
            id: productsId
        }
    })
    return res.status(201).send(product);
};

const deleteProducts = async (req, res) => {
    const { productsId } = req.params;
    const productToDelete = await Products.destroy({
        where:{
            id: productsId
        }
    })
    return res.status(201).send(productToDelete);
}; 

module.exports = {
    getAllProducts,
    getProductsById,
    postProducts,
    putProducts,
    deleteProducts,
};