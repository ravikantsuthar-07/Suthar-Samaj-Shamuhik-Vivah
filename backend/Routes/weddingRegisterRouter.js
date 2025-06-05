import express from 'express';
import { 
    createWeddingRegisterController, 
    deleteWeddingRegisterController, 
    getWeddingRegisterController, 
    getYearWeddingRegisterController,
    updateStatusWeddingRegisterController
} from '../Controller/weddingRegisterController.js';
import multer from 'multer';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';

const router = express.Router();


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (file.fieldname === 'img') {
            cb(null, process.cwd() + '/assets/weddingRegister/');
        } else {
            cb(new Error('Invalid field name'));
        }
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
    }
});
const upload = multer({ storage: storage });

router.post('/create', upload.array('img', 2), createWeddingRegisterController);
router.get('/get-year-wedding', requireSignIn, isAdmin,  getYearWeddingRegisterController);
router.get('/get-wedding/:year', requireSignIn, isAdmin, getWeddingRegisterController);
router.put('/status-update/:id', requireSignIn, isAdmin, updateStatusWeddingRegisterController);
router.post('/delete/:id', requireSignIn, isAdmin, deleteWeddingRegisterController);


export default router;