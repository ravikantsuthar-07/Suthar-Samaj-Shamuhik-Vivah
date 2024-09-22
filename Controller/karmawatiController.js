import DB from '../DB/connection.js';

export const getYearKarmawatiController = async (req, res) => {
    try {
        const sql = `SELECT DISTINCT year FROM karmawati WHERE status = 1`;
        await DB.query(sql, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Error in Gettin Data from database',
                    err
                });
            } else {
                return res.status(200).json({
                    success: true,
                    message: 'Getting Karmawati Year Successfully',
                    results
                });
            }
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error in Getting Karmawati',
            error
        });
    }
}

export const getYearByKarmawatiController = async (req, res) => {
    try {
        const year = req.params.year;
        if (!year) {
            return res.status(400).json({
                success: false,
                message: 'Year is Required'
            });
        }
        const sql = `SELECT * FROM karmawati WHERE year = ? AND status = 1`;
        await DB.query(sql, [year], (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Error in Getting Karmawati From Table',
                    err
                });
            } else {
                return res.status(200).json({
                    success: true,
                    message: 'Getting Karmawati Pansion Successfully',
                    results
                });
            }
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error in Getting karmawati By Year',
            error
        });
    }
}

export const createKarmawatiController = async (req, res) => {
    try {
        const { name, husbandname, address, mobile, age, DODOfHusband, MaholaReport, SamitiReport, BANKNAME, ACC, IFCECODE } = req.body;
        const img = req.file;
        if (!name) {
            return res.status(400).json({
                success: false,
                message: 'Name is Required'
            });
        }
        if (!husbandname) {
            return res.status(400).json({
                success: false,
                message: 'HusBand Name is Required'
            });
        }
        if (!address) {
            return res.status(400).json({
                success: false,
                message: 'Address is Required'
            });
        }
        if (!mobile) {
            return res.status(400).json({
                success: false,
                message: 'Mobile Number is Required'
            });
        }
        if (!img) {
            return res.status(400).json({
                success: false,
                message: 'Image is Required'
            });
        }
        if (!age) {
            return res.status(400).json({
                success: false,
                message: 'Age is Required'
            });
        }
        if (!DODOfHusband) {
            return res.status(400).json({
                success: false,
                message: 'Date of Death of Husband is Required'
            });
        }
        if (!MaholaReport) {
            return res.status(400).json({
                success: false,
                message: 'मौहल्ला प्रभारी की रिपोर्ट is Required'
            });
        }
        if (!SamitiReport) {
            return res.status(400).json({
                success: false,
                message: 'समिति सदस्य की रिपोर्ट is Required'
            });
        }
        if (!BANKNAME) {
            return res.status(400).json({
                success: false,
                message: 'Bank Name is Required'
            });
        }
        if (!ACC) {
            return res.status(400).json({
                success: false,
                message: 'Account Number is Required'
            });
        }
        if (!IFCECODE) {
            return res.status(400).json({
                success: false,
                message: 'IFCE Code is Required'
            });
        }
        const d = new Date();
        let year = d.getFullYear();

        const sql = `INSERT INTO karmawati (year, name, wifeof, img, address, mobile, age, DODOfHusband, MaholaReport, SamitiReport, BANKNAME, ACC, IFCECODE ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? ,? ,?)`;
        await DB.query(sql, [year, name, husbandname, img.filename, address, mobile, age, DODOfHusband, MaholaReport, SamitiReport, BANKNAME, ACC, IFCECODE], (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Error in Inseerting Data',
                    err
                });
            } else {
                return res.status(201).json({
                    success: true,
                    message: 'Karmawati Pansior Member Add Successfully',
                    results
                });
            }
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error in Creating Karmawati Pansion',
            error
        });
    }
}

export const getAdminKarmawatiController = async (req, res) => {
    try {
        const year = req.params.year;
        if (!year) {
            return res.status(400).json({
                success: false,
                message: 'Year is Required'
            });
        }
        const sql = `SELECT * FROM karmawati WHERE year = ? `;
        await DB.query(sql, [year], (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Error in Getting Karmawati From Table',
                    err
                });
            } else {
                return res.status(200).json({
                    success: true,
                    message: 'Getting Karmawati Pansion Successfully',
                    results
                });
            }
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error in Getting karmawati By Year',
            error
        });
    }
}

export const getAdminYearKarmawatiController = async (req, res) => {
    try {
        const sql = `SELECT DISTINCT year FROM karmawati`;
        await DB.query(sql, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Error in Gettin Data from database',
                    err
                });
            } else {
                return res.status(200).json({
                    success: true,
                    message: 'Getting Karmawati Year Successfully',
                    results
                });
            }
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error in Getting Karmawati',
            error
        });
    }
}

export const updateStatusKarmawatiController = async (req, res) => {
    try {
        const id = req.params.id;
        const { status } = req.body;
        if (!id) {
            return res.status(400).json({
                success: false,
                message: 'Id is Required'
            });
        }
        const sql = `UPDATE karmawati SET status = ? WHERE id = ?`;
        await DB.query(sql, [status, id], (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Error in Update Data in Database',
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

export const getYearByWhomKarmawatiController = async (req, res) => {
    try {
        const year = req.params.year;
        const sql = `SELECT * FROM givekarmawati WHERE year = ? AND status = 1 ORDER BY Amount DESC`
        await DB.query(sql, [year], (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Error in Getting Who give Karmawati Pansion',
                    err
                });
            } else {
                return res.status(200).json({
                    success: true,
                    message: 'Getting Who give Karmawati Pansion',
                    results
                });
            }
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error in Gettting Karmawati',
            error
        });
    }
}

export const getYearAdminKarmawatiController = async (req, res) => {
    try {
        const sql = `SELECT DISTINCT year FROM givekarmawati `;
        await DB.query(sql, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Error in Gettin Data from database',
                    err
                });
            } else {
                return res.status(200).json({
                    success: true,
                    message: 'Getting Karmawati Year Successfully',
                    results
                });
            }
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error in Getting Karmawati',
            error
        });
    }
}

export const getYearByAdminWhomKarmawatiController = async (req, res) => {
    try {
        const year = req.params.year;
        const sql = `SELECT * FROM givekarmawati WHERE year = ?  ORDER BY Amount DESC`
        await DB.query(sql, [year], (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Error in Getting Who give Karmawati Pansion',
                    err
                });
            } else {
                return res.status(200).json({
                    success: true,
                    message: 'Getting Who give Karmawati Pansion',
                    results
                });
            }
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error in Gettting Karmawati',
            error
        });
    }
}

export const createWhomKarmawatiController = async (req, res) => {
    try {
        const {name, fname, address, mobile, amount, year} = req.body;
        const img = req.file;
        if (!name) {
            return res.status(400).json({
                success: false,
                message: 'Name is Required'
            });
        }if (!fname) {
            return res.status(400).json({
                success: false,
                message: 'Father or Husband Name is Required'
            });
        }if (!address) {
            return res.status(400).json({
                success: false,
                message: 'Address is Required'
            });
        }if (!mobile) {
            return res.status(400).json({
                success: false,
                message: 'Mobile Number is Required'
            });
        }if (!amount) {
            return res.status(400).json({
                success: false,
                message: 'Amount is Required'
            });
        }
        if (!img) {
            return res.status(400).json({
                success: false,
                message: 'Picuter is Required'
            });
        }
        if (!year) {
            return res.status(400).json({
                success: false,
                message: 'Year is Required'
            });
        }

        const sql = `INSERT INTO givekarmawati (name, fatherName, year, address, mobile, Amount, img) VALUES(?, ?, ?, ?, ?, ?, ?)`;
        await DB.query(sql, [name, fname, year, address, mobile, amount, img.filename], (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Error in Creating Who give Karmawati Pansion',
                    err
                });
            } else {
                return res.status(201).json({
                    success: true,
                    message: 'Add Member whose Give Karmawati Pansion Successfully',
                    results
                });
            }
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error in Add Member whose Give Karmavati Pansion',
            results
        });
    }
}

export const updateStatusGiveKarmawatiController = async (req, res) => {
    try {
        const id = req.params.id;
        const { status } = req.body;
        if (!id) {
            return res.status(400).json({
                success: false,
                message: 'Id is Required'
            });
        }
        const sql = `UPDATE givekarmawati SET status = ? WHERE id = ?`;
        await DB.query(sql, [status, id], (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Error in Update Data in Database',
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