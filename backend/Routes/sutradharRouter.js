import express from 'express';
import {
    createSutradharController,
    deleteSutradharController,
    getAdminSutradharController,
    getSutradharController
} from '../Controller/sutradharController.js';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
import multer from 'multer';

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (file.fieldname === 'file' ) {
            cb(null, process.cwd() + '/assets/sutradhar/');
        } else {
            cb(new Error('Invalid field name'));
        }
    },
    filename: (req, file, cb) => {
        cb(null, Date.now()+'book.pdf');
    }
});
const upload = multer({ storage: storage });

router.get('/get-book', getSutradharController);
router.get('/get-admin-book', requireSignIn, isAdmin, getAdminSutradharController);
router.post('/create', requireSignIn, isAdmin, upload.single('file'), createSutradharController);
router.post('/delete/:id', requireSignIn, isAdmin, deleteSutradharController);

export default router;