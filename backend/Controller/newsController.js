import DB from '../DB/connection.js';
export const getNewsController = async (req, res) => {
    try {
        const sql = `SELECT * FROM news WHERE status = 1 ORDER BY id DESC`;
        await DB.query(sql, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Error in getting Data from Database',
                    err
                });
            } else {
                return res.status(200).json({
                    success: true,
                    message: 'Getting News Successfully',
                    results
                });
            }
        });
    } catch (error) {
        return res.this.status(500).json({
            success: false,
            message: "Error in Getting News",
            error
        });
    }
}

export const getSingleNewsController = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(400).json({
                success: false,
                message: 'Id is required'
            });
        }
        const sql = `SELECT * FROM news WHERE id = ? `;
        await DB.query(sql, [id], (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Error in Get Single News From Table',
                    err
                });
            } else {
                return res.status(200).json({
                    success: true,
                    message: 'Getting Single News Successfully',
                    results
                });
            }
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error in Getting Single News',
            error
        });
    }
}

export const getAdminNewsContoller = async (req, res) => {
    try {
        const sql = `SELECT * FROM news ORDER BY id DESC`;
        await DB.query(sql, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Error in getting Data from Database',
                    err
                });
            } else {
                return res.status(200).json({
                    success: true,
                    message: 'Getting News Successfully',
                    results
                });
            }
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error in Getting News',
            error
        });
    }
}

export const createNewsController = async (req, res) => {
    try {
        const { Title, S_Description, L_Description } = req.body;
        const img = req.file;
        if (!img) {
            return res.status(400).json({
                success: false,
                message: 'Image is Required'
            });
        }
        if (!Title) {
            return res.status(400).json({
                success: false,
                message: "Tilte is required!"
            });
        }
        if (!S_Description) {
            return res.status(400).json({
                success: false,
                message: 'Short Description is Required'
            });
        }
        if (!L_Description) {
            return res.status(400).json({
                success: false,
                message: 'Long Descrition is Required'
            });
        }

        const time = new Date();
        const sql = `INSERT INTO news (Title, S_Description, L_Description, Time, Image) VALUES (?, ?, ?, ?, ?)`;
        await DB.query(sql, [Title, S_Description, L_Description, time, img.filename], (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Error in Inserting Data',
                    err
                });
            } else {
                return res.status(201).json({
                    success: true,
                    message: 'Creating News Successfully',
                    results
                });
            }
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error in Creating News',
            error
        });
    }
}

export const updateNewsController = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(400).json({
                success: false,
                message: 'Id of News is Required'
            });
        }
        const { Title, S_Description, L_Description } = req.body;
        const img = req.file;

        if (!img) {
            return res.status(400).json({
                success: false,
                message: 'Image is Required'
            });
        }
        if (!Title) {
            return res.status(400).json({
                success: false,
                message: "Tilte is required!"
            });
        }
        if (!S_Description) {
            return res.status(400).json({
                success: false,
                message: 'Short Description is Required'
            });
        }
        if (!L_Description) {
            return res.status(400).json({
                success: false,
                message: 'Long Descrition is Required'
            });
        }

        const sql = `UPDATE  news SET Title = ?, S_Description = ?, L_Description = ?, Image = ? WHERE id = ?`;
        await DB.query(sql, [Title, S_Description, L_Description, img.filename, id], (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Error in sql for updating data',
                    err
                });
            } else {
                return res.status(200).json({
                    success: true,
                    message: 'Updating news Successfully',
                    results
                });
            }
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error in Updation News',
            error
        })
    }
}

export const deleteNewsController = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(400).json({
                success: true,
                message: 'Id of News is Required'
            });
        }
        const sql = `DELETE FROM news WHERE id = ?`;
        await DB.query(sql, [id], (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Error in Sql Command for delele',
                    err
                });
            } else {
                return res.status(200).json({
                    success: true,
                    message: 'Deleted a news Successfully',
                    results
                });
            }
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error in Deleting News',
            error
        });
    }
}

export const updateStatusNewsController = async (req, res) => {
    try {
        const { status } = req.body;
        const id = req.params.id;
        if (!id) {
            return res.status(400).json({
                success: false,
                message: 'Id is Required'
            });
        }
        const sql = `UPDATE  news SET status = ? WHERE id = ?`;
        await DB.query(sql, [status, id], (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Error in Update Status of News',
                    err
                });
            } else {
                return res.status(200).json({
                    success: true,
                    message: 'Status updated Successfully',
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