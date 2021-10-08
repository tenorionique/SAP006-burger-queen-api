const getAllProducts = (req, res) => {
    res.status(200).send({
        message:'Usando o GET dentro da rota de produtos',
    });
};

const getProductsById = (req, res) => {
    const id = req.params.productsId;
    res.status(200).send({
        message:'Usando o GET de um produto pelo Id',
        id: id,
    });
};

const postProducts = (req, res) => {
    res.status(201).send({
        message: 'Usando o POST dentro da rota de produtos',
    });
};

const putProducts = (req, res) => {
    const id = req.params.productsId;
    res.status(201).send({
        message:'Usando o PUT dentro da rota de produtos',
        id: id,
    });
};

const deleteProducts = (req, res) => {
    const id = req.params.productsId;
    res.status(201).send({
        message: 'Usando o DELETE dentro da rota de produtinhos',
    });
};

module.exports = {
    getAllProducts,
    getProductsById,
    postProducts,
    putProducts,
    deleteProducts,
};