import express from 'express';
import { 
    createWeddingRegisterController 
} from '../Controller/weddingRegisterController.js';
import multer from 'multer';

const router = express.Router();


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (file.fieldname === 'groom' ) {
            cb(null, process.cwd() + '/client/src/img/weddingRegister/groom');
        } else if (file.fieldname === 'bride') {
            cb(null, process.cwd() + '/client/src/img/weddingRegister/bride/');
        } else {
            cb(new Error('Invalid field name'));
        }
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage: storage });

router.post('/create', upload.fields(['groom', 'bride']), createWeddingRegisterController)


export default router;