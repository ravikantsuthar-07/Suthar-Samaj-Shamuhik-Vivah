import { error } from 'console';
import DB from '../DB/connection.js';
import fs from 'fs';
import { isError } from 'util';
export const getGalleryImageController = async (req, res) => {
    try {
        const year = req.params.year;
        const sql = `SELECT * FROM gallery WHERE year = ? ORDER BY id DESC`;
        await DB.query(sql, [year], (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Error in Data form Database',
                    err
                });
            } else {
                return res.status(200).json({
                    success: true,
                    message: 'Getting Images Successfully',
                    results
                });
            }
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in Getting Images",
            error
        });
    }
}

export const getGalleryYearController = async (req, res) => {
    try {
        const sql = `SELECT DISTINCT year FROM gallery`;
        await DB.query(sql, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Error in getting Year from table',
                    err
                });
            } else {
                return res.status(200).json({
                    success: true,
                    message: 'Getting Year Successfully',
                    results
                });
            }
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error in Getting Year',
            error
        });
    }
}

export const createImageGalleryController = async (req, res) => {
    try {
        const { year } = req.body;
        const img = req.files;
        if (!year) {
            return res.status(400).json({
                success: false,
                message: 'Year is Required'
            });
        }
        if (!img) {
            return res.status(400).json({
                success: false,
                message: 'Images are Required!'
            });
        }
        const sql = `INSERT INTO gallery (year, img) VALUES (?, ?)`;
        for (let i = 0; i < img.length; i++) {
            await DB.query(sql, [year, img[i].filename], (err, results) => {
                if (err) {
                    return res.status(500).json({
                        success: false,
                        message: 'Error in Insterting Data',
                        err
                    })
                }
            });
        }
        return res.status(201).json({
            success: true,
            message: 'Uploading Image Successfully',
            results
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error in Creating Image',
            error
        });
    }
}

export const deleteGalleryImageController = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(400).json({
                success: false,
                message: 'Id is Required!'
            });
        }
        const sql = `DELETE FROM WHERE id = ?`;
        const deleteImage = async (id) => {
            let imgname;
            const sqlDelete = `SELECT img FROM gallery WHERE id = ?`
            await DB.query(sqlDelete, [id], (err, results) => {
                if (err) {
                    return res.status(500).json({
                        success: false,
                        message: 'Error in Getting Image',
                        err
                    });
                } else {
                    imgname = results[0].img;
                }
            })
            await fs.unlink(process.cwd() + '/client/src/img/gallery/' + imgname);
        }
        await DB.query(sql, [id], (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Error in Deleting data From Table',
                    err
                });
            } else {
                deleteImage(id)
                return res.status(200).json({
                    success: true,
                    message: 'Deleting Image Successfully',
                    results
                });
            }
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error in Deleting Image',
            error
        });
    }
}