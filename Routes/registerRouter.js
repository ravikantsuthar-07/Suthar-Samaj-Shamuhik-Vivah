import express from 'express';
import { 
    createController, loginController
} from '../Controller/authController.js';
import formidable from 'express-formidable';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/create', formidable(), createController);

router.post('/login', formidable(), loginController);

router.get('/admin-auth', requireSignIn, isAdmin, (req, res) => {
    res.json( {ok: true} )
});




export default router;