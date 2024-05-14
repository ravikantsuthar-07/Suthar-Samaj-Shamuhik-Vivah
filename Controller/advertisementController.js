import DB from '../DB/connection.js';
import fs from "fs";
export const getAdvertisementController = async (req, res) => {
    try {
        const sql = `SELECT * FROM advertisement WHERE status = 1`;
        await DB.query(sql, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Error in Sql for Getting Data',
                    err
                });
            } else {
                return res.status(200).json({
                    success: true,
                    message: 'Getting Data Successfully',
                    results
                });
            }
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error in Get Advertisement',
            error
        });
    }
}

export const createAdvertisementController = async (req, res) => {
    try {
        const { title, description, mobile } = req.body;
        const file = req.file;
        if (!title) {
            return res.status(404).json({
                success: false,
                message: 'Title is Required'
            });
        }

        if (!description) {
            return res.status(404).json({
                success: false,
                message: 'Description is Required'
            });
        }

        if (!mobile) {
            return res.status(404).json({
                success: false,
                message: 'Mobile number is Required'
            });
        }
        
        if (!file) {
            return res.status(404).json({
                success: false,
                message: 'Template is Required'
            });
        }

        const sql = `INSERT INTO advertisement (title, description, image, mobile, img) VALUES (?, ?, ?, ?, ?)`;
        await DB.query(sql, [title, description, '/static/advertisement/'+file.filename, mobile, file.filename], (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Error in Inserting Data',
                    err
                });
            } else {
                return res.status(201).json({
                    success: true,
                    message: 'Data Inserting Successfully',
                    results
                });
            }
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error in Submit Data',
            error
        });
    }
}

export const updateStatusAdvertisementController = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(400).json({
                success: false,
                message: 'ID is Required'
            });
        }

        const status = req.body.status;

        const sql = `UPDATE advertisement SET status = ? WHERE id = ?`;
        await DB.query(sql, [status, id], (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Error in Update Status in SQL',
                    err
                });
            } else {
                return res.status(200).json({
                    success: true,
                    message: 'Status Update Successfully',
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

export const deleteAdvertisementController = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(400).json({
                success: false,
                message: 'ID is Required'
            });
        }
        
        const file = req.body.file;
        if (!file) {
            return res.status(400).json({
                success: false,
                message: 'File is Required'
            });
        }

        
        fs.unlinkSync(process.cwd() + '/assets/advertisement/' + file);

        const sql = `DELETE FROM advertisement WHERE id = ?`;
        await DB.query(sql, [id], (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Error in Deleting Advertisement',
                    err
                });
            } else {
                return res.status(200).json({
                    success: true,
                    message: 'Deleting Advertisement Successfully',
                    results
                });
            }
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error in Deleting Advertisement',
            error
        });
    }
}

export const getAdminAdvertisementController = async (req, res) => {
    try {
        const sql = `SELECT * FROM advertisement`;
        await DB.query(sql, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Error in Sql for Getting Data',
                    err
                });
            } else {
                return res.status(200).json({
                    success: true,
                    message: 'Getting Data Successfully',
                    results
                });
            }
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error in Get Advertisement',
            error
        });
    }
}