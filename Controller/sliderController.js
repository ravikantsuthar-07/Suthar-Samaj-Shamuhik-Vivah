import DB from "../DB/connection.js";
import sharp from 'sharp';

export const getSliderController = async (req, res) => {
    try {
        const sql = `SELECT * FROM sliders WHERE status > 0 ORDER BY id DESC`;
        await DB.query(
            sql, (err, results) => {
                if (err) {
                    return res.status(500).json({
                        success: false,
                        message: 'Error in Getting Sliders',
                        err
                    });
                } else {
                    return res.status(200).json({
                        success: true,
                        message: 'Getting Sliders Successfully',
                        results
                    });
                }
            }
        );
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in Getting Sliders",
            error
        });
    }
};

export const createSliderController = async (req, res) => {
    try {
        const { year } = req.body;
        console.log("RAvi");
        const img  = req.file;
        console.log(img.originalname);
        
        if (!img.originalname) {
            return res.status(500).json({
                success: false,
                message: "Image is Required"
            });
        }

        if (!year) {
            return res.status(500).json({
                success: false,
                message: "Year is Required"
            });
        }
        const sql = `INSERT INTO sliders(Year, path) VALUES(?, ?)`;
        const up = async (id) =>{
            await sharp(req.file.buffer).toFile(process.cwd() + `/client/src/img/sliders/${id}`)
        }
        await DB.query(
            sql, [year, img.originalname], (err, results) => {
                if (err) {
                    return res.status(500).json({
                        success: false,
                        message: 'Error in Insert Sliders',
                        err
                    });
                } else {
                    up(img.originalname);
                    return res.status(201).json({
                        success: true,
                        message: 'Getting Sliders Successfully',
                        results
                    });
                }
            }
        );
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in Creating Sliders",
            error
        });
    }
};


export const getSliderLastController = async (req, res) => {
    try {
        const sql = `SELECT * FROM sliders WHERE status > 0 ORDER BY id DESC LIMIT 3`;
        await DB.query(
            sql, (err, results) => {
                if (err) {
                    return res.status(500).json({
                        success: false,
                        message: 'Error in Getting Sliders',
                        err
                    });
                } else {
                    return res.status(200).json({
                        success: true,
                        message: 'Getting Sliders Successfully',
                        results
                    });
                }
            }
        );
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in Getting Sliders",
            error
        });
    }
}