import express from 'express'
import { 
    createTeamController,
    deleteTeamController,
    getAdminTeamController,
    getSingleTeamController,
    getTeamController, 
    updateStatusTeamController,
    updateTeamController
} from '../Controller/teamController.js';
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import multer from 'multer';

const router = express.Router();




const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (file.fieldname === 'img' ) {
            cb(null, process.cwd() + '/assets/team/');
        } else {
            cb(new Error('Invalid field name'));
        }
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
    }
});
const upload = multer({ storage: storage });


router.get('/get-team', getTeamController);
router.get('/get-member/:id', requireSignIn, isAdmin, getSingleTeamController);
router.get('/get-admin-team', requireSignIn, isAdmin, getAdminTeamController);
router.post('/create-team', requireSignIn, isAdmin, upload.single('img'), createTeamController);
router.put('/update-status-team/:id', requireSignIn, isAdmin, updateStatusTeamController);
router.put('/update-team/:id', requireSignIn, isAdmin, upload.single('img'), updateTeamController);
router.delete('/delete-team/:id', requireSignIn, isAdmin, deleteTeamController);




export default router;