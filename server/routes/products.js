const { Router } = require('express');
const {
    getAllProducts,
    getProductsById,
    postProducts,
    putProducts,
    deleteProducts,
} = require('../controller/productController');

const router = Router();

router.get('/', getAllProducts);
router.get('/:productsId', getProductsById);
router.post('/', postProducts);
router.put('/:productsId', putProducts);
router.delete('/:productsId', deleteProducts);

module.exports = router;