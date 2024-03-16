import DB from "../DB/connection.js";
import sharp from 'sharp';

export const getSliderController = async (req, res) => {
    try {
        const sql = `SELECT * FROM sliders WHERE status > 0 ORDER BY Year DESC`;
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

export const getSingleSliderController = async (req, res) => {
    try {
        const id = req.params.id
        const sql = `SELECT * FROM sliders WHERE status > 0 AND (id = ${id} OR Year = ${id}) ORDER BY Year DESC`;
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

export const getAdminSliderController = async (req, res) => {
    try {
        const sql = `SELECT * FROM sliders ORDER BY Year DESC`;
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
        const { year, date, SrNo } = req.body;
        const img = req.file;
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
        if (!date) {
            return res.status(500).json({
                success: false,
                message: "Date is Required"
            });
        }
        if (!SrNo) {
            return res.status(500).json({
                success: false,
                message: "Number of Wedding is Required"
            });
        }
        const sql = `INSERT INTO sliders(Year, path, Dates, SrNo) VALUES(?, ?, ?, ?)`;
        const up = async (id) => {
            await sharp(req.file.buffer).toFile(process.cwd() + `/client/src/img/sliders/${id}`)
        }
        await DB.query(
            sql, [year, img.originalname, date, SrNo], (err, results) => {
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
        const sql = `SELECT * FROM sliders WHERE status > 0 ORDER BY Year DESC LIMIT 3`;
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

export const updateStatusSliderController = async (req, res) => {
    try {
        const id = req.params.id;
        const status = req.body.status;
        const sql = `UPDATE sliders set status = ${status} WHERE id = ${id}`;
        DB.query(
            sql, (err, results) => {
                if (err) {
                    return res.status(500).json({
                        success: false,
                        message: 'Error in Update slider',
                        err
                    });
                } else {
                    return res.status(200).json({
                        success: true,
                        message: 'Update Status of Slider',
                        results
                    });
                }
            }
        )
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in Updating Status Of Slider",
            error
        });
    }
}


export const updateSliderController = async (req, res) => {
    try {
        const id = req.params.id;
        const { year, date, SrNo } = req.body;
        const img = req.file;

        
        if (!img) {
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
        if (!date) {
            return res.status(500).json({
                success: false,
                message: "Date is Required"
            });
        }
        if (!SrNo) {
            return res.status(500).json({
                success: false,
                message: "Number of Wedding is Required"
            });
        }
        
        
        const sql = `UPDATE sliders set Year = ? , path = ?, Dates = ?, SrNo = ?  WHERE id = ?`;
        DB.query(
            sql, [year, img.originalname, date, SrNo, id], (err, results) => {
                if (err) {
                    return res.status(500).json({
                        success: false,
                        message: 'Error in Update slider',
                        err
                    });
                } else {
                    return res.status(200).json({
                        success: true,
                        message: 'Update Status of Slider',
                        results
                    });
                }
            }
        )
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in Updating Of Slider",
            error
        });
    }
}

export const deleteSliderController = async (req, res) => {
    try {
        const id = req.params.id;

        
        const sql = `DELETE FROM sliders WHERE id = ?`;
        DB.query(
            sql, [id], (err, results) => {
                if (err) {
                    return res.status(500).json({
                        success: false,
                        message: 'Error in Delete slider',
                        err
                    });
                } else {
                    return res.status(200).json({
                        success: true,
                        message: 'Deleted Successfully of Slider',
                        results
                    });
                }
            }
        )
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in Deleting Of Slider",
            error
        });
    }
}