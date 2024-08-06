import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// nao exisitiria em uma aplicação real
router.get('/', loginRequired, userController.index); // lista usuarios
router.get('/:id', loginRequired, userController.show); // lista um usuario

router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;
