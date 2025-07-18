import { exit } from 'process';
import DB from '../DB/connection.js';
import fs from 'fs'
export const getSutradharController = async (req, res) => {
    try {
        const d = new Date();
        const year = d.getFullYear();
        const sql = `SELECT * FROM book WHERE year = ? OR year = ? ORDER BY id DESC`;
        await DB.query(sql, [year, year-1], (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Error in Getting Data from database',
                    err
                });
            } else {
                return res.status(200).json({
                    success: true,
                    message: 'Getting Book of this year Successfully',
                    results
                });
            }
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error in Getting Book',
            error
        });
    }
}
export const getAdminSutradharController = async (req, res) => {
    try {
        const sql = `SELECT * FROM book ORDER BY id DESC`;
        await DB.query(sql, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Error in Getting Data from database',
                    err
                });
            } else {
                return res.status(200).json({
                    success: true,
                    message: 'Getting Book of this year Successfully',
                    results
                });
            }
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error in Getting Book',
            error
        });
    }
}

export const createSutradharController = async (req, res) => {
    try {
        const { year } = req.body;
        const file = req.file;
        if (!year) {
            return res.status(400).json({
                success: false,
                message: 'Year is Required'
            });
        }
        if (!file) {
            return res.status(400).json({
                success: false,
                message: 'File is Required'
            });
        }
        const sql = `INSERT INTO book (year, file) VALUES (?, ?)`;
        await DB.query(sql, [year, file.filename], (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Error in Instert Data',
                    err
                });
            } else {
                return res.status(201).json({
                    success: true,
                    message: 'Inserting Data Successfully',
                    results
                });
            }
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error in Uploading Book',
            error
        });
    }
}

export const deleteSutradharController = async (req, res) => {
    try {

        const id = req.params.id;
        if (!id) {
            return res.status(400).json({
                success: false,
                message: 'Id is Required!'
            });
        }
        const sql = `DELETE FROM book WHERE id = ?`;
        let imgname = req.body.file;
        if (!imgname) {
            return res.status(400).json({
                success: false,
                message: 'File is Requied'
            });
        }
        fs.unlinkSync(process.cwd() + '/assets/sutradhar/' + imgname);
        await DB.query(sql, [id], (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Error in Deleting data From Table',
                    err
                });
            } else {
                return res.status(200).json({
                    success: true,
                    message: 'Deleting Book Successfully',
                    results
                });
            }
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error in Deleting Book',
            error
        });
    }
}