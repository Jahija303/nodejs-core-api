// /api/user/...
import { Router } from 'express';
const userController = require('../controllers/users.controller');

const router = Router();

router.get('/getAllUsers', userController.getAllUsers);
router.get('/getUser', userController.getUser);
router.post('/createUser', userController.createUser);
router.delete('/deleteUser', userController.deleteUser);
router.put('/updateUser', userController.updateUser);

module.exports = router;
