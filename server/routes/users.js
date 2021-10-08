const { Router } = require('express');

const {
    getAllUsers,
    getUserById,
    postUsers,
    putUser,
    deleteUser
} = require('../controller/userController');

const router = Router();

router.get('/', getAllUsers);
router.get('/:uid', getUserById);
router.post('/', postUsers);
router.put('/:uid', putUser);
router.delete('/:uid', deleteUser);

module.exports = router;