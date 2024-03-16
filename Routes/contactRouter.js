import express from 'express';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
import { createContactController, getContactController } from '../Controller/contactController.js';

const router = express.Router();

router.get('/get-contact', requireSignIn, isAdmin, getContactController);
router.post('/create', createContactController);


export default router;