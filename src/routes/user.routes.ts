import {Router} from 'express';
import {getUsers, createUsers, getUser, updateUser, deleteUser} from '../controllers/user.controller';

const router = Router();

router.get('/users', getUsers);
router.get('/users/:id', getUser);
router.post('/users', createUsers);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;