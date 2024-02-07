import express from 'express';
import { 
    createController,
    loginController
} from '../Controller/authController.js';
import formidable from 'express-formidable';

const router = express.Router();

router.post('/create', formidable(), createController);

router.post('/login', formidable(), loginController);




export default router;