import DB from '../DB/connection.js';
export const createWeddingRegisterController = async (req, res) => {
    try {
        const {groomName, groomFatherName, groomGrandFatherName, groomMobile, groomAddress, groomDOB, BrideName, BrideFatherName, BrideGrandFatherName, BrideMobile, BrideAddress, BrideDOB} = req.body;
        if (!groomName) {
            return res.status(400).json({
                success: false,
                message: 'Groom Name is Required'
            });
        }
        if (!groomFatherName) {
            return res.status(400).json({
                success: false,
                message: 'Groom Father Name is Required'
            });
        }
        if (!groomGrandFatherName) {
            return res.status(400).json({
                success: false,
                message: 'Groom Grand Father Name is Required'
            });
        }
        if (!groomMobile) {
            return res.status(400).json({
                success: false,
                message: 'Groom Mobile is Required'
            });
        }
        if (!groomAddress) {
            return res.status(400).json({
                success: false,
                message: 'Groom Address is Required'
            });
        }
        if (!groomDOB) {
            return res.status(400).json({
                success: false,
                message: 'Groom Date of Birth is Required'
            });
        }
        if (!BrideName) {
            return res.status(400).json({
                success: false,
                message: 'Bride Name is Required'
            });
        }
        if (!BrideFatherName) {
            return res.status(400).json({
                success: false,
                message: 'Bride Father Name is Required'
            });
        }
        if (!BrideGrandFatherName) {
            return res.status(400).json({
                success: false,
                message: 'Bride Grand Father Name is Required'
            });
        }
        if (!BrideMobile) {
            return res.status(400).json({
                success: false,
                message: 'Bride Mobile Number is Required'
            });
        }
        if (!BrideAddress) {
            return res.status(400).json({
                success: false,
                message: 'Bride Address is Required'
            });
        }
        if (!BrideDOB) {
            return res.status(400).json({
                success: false,
                message: 'Bride Date of Birth is Required'
            });
        }
        const d = new Date();
        let year = d.getFullYear();
        const sql = `INSERT INTO weddingregister (year, groomName, groomFatherName, groomGrandFatherName, groomMobile, groomAddress, groomDOB, BrideName, BrideFatherName, BrideGrandFatherName, BrideMobile, BrideAddress, BrideDOB) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        await DB.query(sql, [year, groomName, groomFatherName, groomGrandFatherName, groomMobile, groomAddress, groomDOB, BrideName, BrideFatherName, BrideGrandFatherName, BrideMobile, BrideAddress, BrideDOB], (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Error in Sql For Submit Wedding Register Form',
                    err
                });
            } else {
                return res.status(201).json({
                    success: true,
                    message: 'Wedding Register From Submited Successfully',
                    results
                });
            }
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error in Creating Wedding Register',
            error
        });
    }
}