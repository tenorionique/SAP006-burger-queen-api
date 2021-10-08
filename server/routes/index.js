const { Router } = require('express');
const router = Router();

const productsRouter = require('./products');
const usersRouter = require('./users');
const ordersRouter = require('./orders');


// aqui vai todas as rotas

router.use('/products',productsRouter);
router.use('/orders', ordersRouter);
router.use('/users', usersRouter);

router.use((req, res, next) => {
    const erro = new Error("Not Found");
    erro.status = 404;
    next(erro);
  });
  
  router.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
      erro: {
        message: error.message,
      },
    });
  });

module.exports = router
