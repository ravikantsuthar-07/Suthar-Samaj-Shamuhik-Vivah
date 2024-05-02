import DB from '../DB/connection.js';
export const getTeamController = async (req, res) => {
    try {
        const sql = `SELECT * FROM teams WHERE status > 0`;
        await DB.query(
            sql, (err, results) => {
                if (err) {
                    return res.status(500).json({
                        success: false,
                        message: 'Error in Getting Team from database',
                        err
                    });
                } else {
                    if (results.length > 0) {
                        return res.status(200).json({
                            success: true,
                            message: 'Getting Team Successfully',
                            results
                        });
                    } else {
                        return res.status(400).json({
                            success: false,
                            message: 'No Data Founds'
                        });
                    }
                }
            }
        )
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in Getting Team",
            error
        })
    }
}

export const getSingleTeamController = async (req, res) => {
    try {
        const sql = `SELECT * FROM teams WHERE status > 0 AND id = ${req.params.id}`;
        await DB.query(
            sql, (err, results) => {
                if (err) {
                    return res.status(500).json({
                        success: false,
                        message: 'Error in Getting Team from database',
                        err
                    });
                } else {
                    if (results.length > 0) {
                        return res.status(200).json({
                            success: true,
                            message: 'Getting Team Successfully',
                            results
                        });
                    } else {
                        return res.status(400).json({
                            success: false,
                            message: 'No Data Founds'
                        });
                    }
                }
            }
        )
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in Getting Team",
            error
        })
    }
}

export const getAdminTeamController = async (req, res) => {
    try {
        const sql = `SELECT * FROM teams`;
        await DB.query(
            sql, (err, results) => {
                if (err) {
                    return res.status(500).json({
                        success: false,
                        message: 'Error in Getting Team from database',
                        err
                    });
                } else {
                    if (results.length > 0) {
                        return res.status(200).json({
                            success: true,
                            message: 'Getting Team Successfully',
                            results
                        });
                    } else {
                        return res.status(400).json({
                            success: false,
                            message: 'No Data Founds'
                        });
                    }
                }
            }
        )
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in Getting Team",
            error
        })
    }
}

export const createTeamController = async (req, res) => {
    try {
        const { Name, PostOn, Mobile, Address } = req.body;
        const Img = req.file;
        if (!Name) {
            return res.status(400).json({
                success: false,
                message: 'Name is Required'
            })
        }
        if (!PostOn) {
            return res.status(400).json({
                success: false,
                message: 'Post is Required'
            })
        }
        if (!Mobile) {
            return res.status(400).json({
                success: false,
                message: 'Mobile is Required'
            })
        }
        if (!Img) {
            return res.status(400).json({
                success: false,
                message: 'Image is Required'
            })
        }
        if (!Address) {
            return res.status(400).json({
                success: false,
                message: 'Address is Required'
            })
        }

        const sql = `INSERT INTO teams (Name, PostOn, Mobile, Address, img) VALUES (?, ?, ?, ?, ?)`;
        await DB.query(
            sql, [Name, PostOn, Mobile, Address, Img.originalname], (err, results) => {
                if (err) {
                    return res.status(500).json({
                        success: false,
                        message: 'Error in Inserting Data in Database',
                        err
                    });
                } else {
                    return res.status(201).json({
                        success: true,
                        message: "Creating Team Successfully",
                        results
                    });
                }
            }
        )
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error in Creating Team',
            error
        });
    }
}

export const updateStatusTeamController = async (req, res) => {
    try {
        const id = req.params.id;
        const { status } = req.body;

        const sql = `UPDATE teams SET status = ? WHERE id = ? `;
        await DB.query(
            sql, [status, id], (err, results) => {
                if (err) {
                    return res.status(500).json({
                        success: false,
                        message: 'Error in Updating Status in Database',
                        err
                    });
                } else {
                    if (status == 1) {
                        return res.status(200).json({
                            success: true,
                            message: 'Team Member is Activate',
                            results
                        });
                    } else {
                        return res.status(200).json({
                            success: true,
                            message: 'Team Member is DeActivate',
                            results
                        });
                    }
                }
            }
        );
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error in Updating Status',
            error
        });
    }
}

export const updateTeamController = async (req, res) => {
    try {
        const id = req.params.id;
        const { Name, PostOn, Mobile, Address } = req.body;
        const img = req.file;
        if (!Name) {
            return res.status(400).json({
                success: false,
                message: 'Name is Required'
            })
        }
        if (!PostOn) {
            return res.status(400).json({
                success: false,
                message: 'Post is Required'
            })
        }
        if (!Mobile) {
            return res.status(400).json({
                success: false,
                message: 'Mobile is Required'
            })
        }
        if (!img) {
            return res.status(400).json({
                success: false,
                message: 'Image is Required'
            })
        }
        if (!Address) {
            return res.status(400).json({
                success: false,
                message: 'Address is Required'
            })
        }


        const sql = `UPDATE teams SET Name = ?, PostOn = ?, Mobile = ?, img = ?, Address = ? WHERE id = ? `;
        await DB.query(
            sql, [Name, PostOn, Mobile, img.originalname, Address, id], (err, results) => {
                if (err) {
                    return res.status(500).json({
                        success: false,
                        message: 'Error in Updating Team Information in Database',
                        err
                    });
                } else {
                    return res.status(200).json({
                        success: true,
                        message: 'Team Information update Successfully',
                        results
                    });
                }
            }
        );
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error in Updating Team',
            error
        });
    }
}

export const deleteTeamController = async (req, res) => {
    try {
        const id = req.params.id;
        const sql = `DELETE FROM teams WHERE id = ?`;
        await DB.query(
            sql, [id], (err, results) => {
                if (err) {
                    return res.status(500).json({
                        success: false,
                        message: 'Error in Deleting Data from Database',
                        err
                    });
                } else {
                    return res.status(200).json({
                        success: true,
                        message: 'Team Member Deleted Successfully',
                        results
                    });
                }
            }
        )
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error in Deleting Team',
            error
        })
    }
}