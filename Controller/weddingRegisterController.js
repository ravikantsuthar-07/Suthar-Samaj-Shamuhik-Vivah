import DB from '../DB/connection.js';
import fs from 'fs'
export const createWeddingRegisterController = async (req, res) => {
    try {
        const { groomName, groomFatherName, groomGrandFatherName, groomMobile, groomAddress, groomDOB, BrideName, BrideFatherName, BrideGrandFatherName, BrideMobile, BrideAddress, BrideDOB } = req.body;
        const img = req.files;
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
        if (!img) {
            return res.status(400).json({
                success: false,
                message: "Both Image is Required"
            })
        }
        let Images = "";
        for (let i = 0; i < img.length; i++) {
            Images = Images + img[i].filename + " ";
        }
        const d = new Date();
        let year = d.getFullYear();
        const sql = `INSERT INTO weddingregister (year, groomName, groomFatherName, groomGrandFatherName, groomMobile, groomAddress, groomDOB, BrideName, BrideFatherName, BrideGrandFatherName, BrideMobile, BrideAddress, BrideDOB, Image) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        await DB.query(sql, [year, groomName, groomFatherName, groomGrandFatherName, groomMobile, groomAddress, groomDOB, BrideName, BrideFatherName, BrideGrandFatherName, BrideMobile, BrideAddress, BrideDOB, Images], (err, results) => {
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

export const getYearWeddingRegisterController = async (req, res) => {
    try {
        const sql = `SELECT DISTINCT year FROM weddingregister`;
        await DB.query(sql, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Error in  Getting Year of Wedding in Sql',
                    err
                });
            } else {
                return res.status(200).json({
                    success: true,
                    message: 'Getting year of Wedding Successfully',
                    results
                });
            }
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error in getting Year of Wedding Register',
            error
        });
    }
}

export const getWeddingRegisterController = async (req, res) => {
    try {
        const year = req.params.year;
        if (!year) {
            return res.status(400).json({
                success: false,
                message: 'Year is Required'
            });
        }
        const sql = `SELECT * FROM weddingregister WHERE year = ? `;
        await DB.query(sql, [year], (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Error in Sql for getting Wedding Register',
                    err
                });
            } else {
                return res.status(200).json({
                    success: true,
                    message: 'Getting Wedding Register Successfully',
                    results
                });
            }
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error in Getting Registraction Data',
            error
        });
    }
}

export const updateStatusWeddingRegisterController = async (req, res) => {
    try {
        const id = req.params.id;
        const { status } = req.body;
        if (!id) {
            return res.status(400).json({
                success: false,
                message: 'Id is Required'
            });
        }
        const sql = `UPDATE weddingregister SET status = ? WHERE id = ?`;
        await DB.query(sql, [status, id], (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Error in Sql for Updating Status',
                    err
                });
            } else {
                return res.status(200).json({
                    success: true,
                    message: 'Status update Successfully',
                    results
                });
            }
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error in Updating Status',
            error
        });
    }
}

export const deleteWeddingRegisterController = async (req, res) => {
    try {
        const id = req.params.id;
        const { file } = req.body;
        if (!file) {
            return res.status(400).json({
                success: false,
                message: 'Some Data is Required for Deleting'
            });
        }
        for (let i = 0; i < file.length - 1; i++) {
            fs.unlinkSync(process.cwd() + '/client/src/img/weddingRegister/' + file[i]);
        }
        if (!id) {
            return res.status(400).json({
                success: false,
                message: 'Id is Required'
            });
        }
        const sql = `DELETE FROM weddingregister WHERE id = ?`;
        await DB.query(sql, [id], (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Error in Sql for Deleting Registraction Memeber',
                    err
                });
            } else {
                return res.status(200).json({
                    success: true,
                    message: 'Deleting Wedding Memeber Successfully',
                    results
                })
            }
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error in Deleting Wedding Register Memeber',
            error
        });
    }
}