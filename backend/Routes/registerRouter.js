import express from 'express';
import { 
    createController,
    loginController
} from '../Controller/authController.js';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/create',  createController);

router.post('/login',  loginController);

router.get('/admin-auth', requireSignIn, isAdmin, (req, res) => {
    res.json( {ok: true} )
});




export default router;