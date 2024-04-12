import DB from '../DB/connection.js';
export const getSammanitController = async (req, res) => {
    try {
        const year = req.params.year;
        if (!year) {
            return res.status(400).json({
                success: false,
                message: 'Year is Required'
            });
        }
        const sql = `SELECT * FROM sammanit WHERE status = 1 AND year = ?`;
        await DB.query(sql, [year], (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Error in Getting Data from table',
                    err
                });
            } else {
                return res.status(200).json({
                    success: true,
                    message: 'Getting Sammanit Successfully',
                    results
                });
            }
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error in Getting Sammanit',
            error
        });
    }
}
export const getAdminSammanitController = async (req, res) => {
    try {
        const year = req.params.year;
        if (!year) {
            return res.status(400).json({
                success: false,
                message: 'Year is Required'
            });
        }
        const sql = `SELECT * FROM sammanit WHERE year = ?`;
        await DB.query(sql, [year], (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Error in Getting Data from table',
                    err
                });
            } else {
                return res.status(200).json({
                    success: true,
                    message: 'Getting Sammanit Successfully',
                    results
                });
            }
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error in Getting Sammanit',
            error
        });
    }
}

export const createSammanitController = async (req, res) => { 
    try {                                                                
        const { name, fName, address, dob, mob } = req.body;
        const img = req.file;
        if (!img) {
            return res.status(400).json({
                success: false,
                message: 'Image is Required'
            });
        }
        if (!name) {
            return res.status(400).json({
                success: false,
                message: 'Name is Required'
            });
        }
        if (!fName) {
            return res.status(400).json({
                success: false,
                message: 'Father or Husband Name is Required'
            });
        }
        if (!address) {
            return res.status(400).json({
                success: false,
                message: 'Address is Required'
            });
        }
        if (!dob) {
            return res.status(400).json({
                success: false,
                message: 'Date of Birth is Required'
            });
        }
        if (!mob) {
            return res.status(400).json({
                success: false,
                message: 'Mobile Number is Required'
            });
        }
        const d = new Date();
        let year = d.getFullYear();
        const sql = `INSERT INTO Sammanit (name, FName, address, Date_of_birth, Mobile, Image, year) VALUES (?, ?, ?, ?, ?, ?, ?)`;
        await DB.query(sql, [name, fName, address, dob, mob, img.originalname, year], (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Error in Inserting Data',
                    err
                });
            } else {
                return res.status(201).json({
                    success: true,
                    message: 'Inserting Successfully',
                    results
                });
            }
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error in Add a Member',
            error
        });
    }
}

export const updateStatusSammanitController = async (req, res) => {
    try {
        const id = req.params.id;
        const status = req.body.status;
        if (!id) {
            return res.status(400).json({
                success: false,
                message: 'Id is Required'
            });
        }
        const sql = `UPDATE Sammanit SET status = ? WHERE id = ?`;
        await DB.query(sql, [status, id], (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Error in Update Status in Sql',
                    err
                });
            } else {
                return res.status(200).json({
                    success: true,
                    message: 'Updating Status Successfully',
                    results
                });
            }
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error in updating Status',
            error
        });
    }
}

export const getYearSammanitController = async (req, res) => {
    try {
        const sql = `SELECT DISTINCT year FROM Sammanit`;
        await DB.query(sql, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Getting Year form Table',
                    err
                });
            } else {
                return res.status(200).json({
                    success: true,
                    message: 'Getting year Successfully',
                    results
                });
            }
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error in Getting Year',
            error
        });
    }
}