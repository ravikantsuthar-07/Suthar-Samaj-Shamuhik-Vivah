import DB from "../DB/connection.js";
export const getAllWeddingController = async (req, res) => {
    try {
        const year_id = req.params.year;
        console.log(year_id);

        const sql = `SELECT * FROM weddings WHERE year = ?`
        DB.query(
            sql, [year_id], (err, results) => {
                if (err) {
                    return res.status(500).json({
                        success: false,
                        message: `Error in Getting Wedding from table`,
                        err
                    });
                } else {
                    if (results.length > 0) {
                        return res.status(200).json({
                            success: true,
                            message: `Getting all wedding In ${year_id}year`,
                            results
                        });
                    } else {
                        return res.status(404).json({
                            success: false,
                            message: `Not Wedding is Added in ${year_id} year`
                        });
                    }
                }
            }
        )

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in Getting Wedding",
            error
        });
    }
};

export const createWeddingController = async (req, res) => {
    try {
        const { year, M_name, MF_Name, MG_Name, M_Address, M_Mobile, F_Name, FF_Name, FG_Name, F_Address, F_Mobile } = req.body;
        const M_Photo = req.files;
        if (!year) return res.status(400).json({ success: false, message: "Year is Required" });
        if (!M_name) return res.status(400).json({ success: false, message: "Male Name is Required" });
        if (!MF_Name) return res.status(400).json({ success: false, message: "Male Father Name is Required" });
        if (!MG_Name) return res.status(400).json({ success: false, message: "Male Grandfather Name is Required" });
        if (!M_Address) return res.status(400).json({ success: false, message: "Male Address is Required" });
        if (!M_Mobile) return res.status(400).json({ success: false, message: "Male Mobile is Required" });
        if (!M_Photo) return res.status(400).json({ success: false, message: "Male Image is Required" });
        if (!F_Name) return res.status(400).json({ success: false, message: "Female Name is Required" });
        if (!FF_Name) return res.status(400).json({ success: false, message: "Female Father Name is Required" });
        if (!FG_Name) return res.status(400).json({ success: false, message: "Female Grandfather Name is Required" });
        if (!F_Address) return res.status(400).json({ success: false, message: "Female Address is Required" });
        if (!F_Mobile) return res.status(400).json({ success: false, message: "Female Mobile Number is Required" });

        const sql = `INSERT INTO weddings (year, M_Name, MF_Name, MG_Name, M_Address, M_Mobile, M_Photo, F_Name, FF_Name, FG_Name, F_Address, F_Mobile) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? ,? )`;
        const image = M_Photo[0].originalname + " " + M_Photo[1].originalname;
        DB.query(
            sql, [year, M_name, MF_Name, MG_Name, M_Address, M_Mobile, image, F_Name, FF_Name, FG_Name, F_Address, F_Mobile], (err, results) => {
                if (err) {
                    return res.status(500).json({
                        success: false,
                        message: "Error in Inserting Data in Table",
                        err
                    });
                } else {
                    return res.status(201).json({
                        success: true,
                        message: "Inserting Data Successfully",
                        results
                    });
                }
            }
        );


    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in Creating Wedding",
            error
        });
    }
};

export const updateWeddingController = async (req, res) => {
    try {
        const id = req.params.id;
        const { year, M_name, MF_Name, MG_Name, M_Address, M_Mobile, F_Name, FF_Name, FG_Name, F_Address, F_Mobile } = req.body;
        const M_Photo = req.files;
        if (!year) return res.status(400).json({ success: false, message: "Year is Required" });
        if (!M_name) return res.status(400).json({ success: false, message: "Male Name is Required" });
        if (!MF_Name) return res.status(400).json({ success: false, message: "Male Father Name is Required" });
        if (!MG_Name) return res.status(400).json({ success: false, message: "Male Grandfather Name is Required" });
        if (!M_Address) return res.status(400).json({ success: false, message: "Male Address is Required" });
        if (!M_Mobile) return res.status(400).json({ success: false, message: "Male Mobile is Required" });
        if (!M_Photo) return res.status(400).json({ success: false, message: "Male Image is Required" });
        if (!F_Name) return res.status(400).json({ success: false, message: "Female Name is Required" });
        if (!FF_Name) return res.status(400).json({ success: false, message: "Female Father Name is Required" });
        if (!FG_Name) return res.status(400).json({ success: false, message: "Female Grandfather Name is Required" });
        if (!F_Address) return res.status(400).json({ success: false, message: "Female Address is Required" });
        if (!F_Mobile) return res.status(400).json({ success: false, message: "Female Mobile Number is Required" });


        const sql = `UPDATE weddings SET year = ?, M_Name = ?, MF_Name = ?, MG_Name = ?, M_Address = ?, M_Mobile = ?, M_Photo = ?, F_Name = ?, FF_Name = ?, FG_Name = ?, F_Address = ?, F_Mobile = ?  WHERE id = ${id}`;
        const image = M_Photo[0].originalname + " " + M_Photo[1].originalname;
        DB.query(
            sql, [year, M_name, MF_Name, MG_Name, M_Address, M_Mobile, image, F_Name, FF_Name, FG_Name, F_Address, F_Mobile], (err, results) => {
                if (err) {
                    return res.status(500).json({
                        success: false,
                        message: "Error in Updating Data in Table",
                        err
                    });
                } else {
                    return res.status(201).json({
                        success: true,
                        message: "Updating Data Successfully",
                        results
                    });
                }
            }
        );
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in Creating Wedding",
            error
        });
    }
};

export const deleteWeddingController = async (req, res) => {
    try {
        const id = req.params.id;
        const sql = `DELETE FROM weddings  WHERE id = ${id}`;
        DB.query(
            sql, (err, results) => {
                if (err) {
                    return res.status(500).json({
                        success: false,
                        message: "Error in Deleting Data in Table",
                        err
                    });
                } else {
                    return res.status(201).json({
                        success: true,
                        message: "Deleting Data Successfully",
                        results
                    });
                }
            }
        );

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in Deleting Wedding Information",
            error
        });
    }
};


export const getGiftController = async (req, res) => {
    try {
        const year_id = req.params.year;
        console.log(year_id);

        const sql = `SELECT * FROM gifts WHERE year = ?`
        DB.query(
            sql, [year_id], (err, results) => {
                if (err) {
                    return res.status(500).json({
                        success: false,
                        message: `Error in Getting Gifts from table`,
                        err
                    });
                } else {
                    if (results.length > 0) {
                        return res.status(200).json({
                            success: true,
                            message: `Getting all Gifts In ${year_id}year`,
                            results
                        });
                    } else {
                        return res.status(404).json({
                            success: false,
                            message: `Not Gifts is Added in ${year_id} year`
                        });
                    }
                }
            }
        )
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in Getting Gift",
            error
        })
    }
};


export const createGiftController = async (req, res) => {
    try {
        const { year, Name, Number, Price } = req.body;
        if (!year) return res.status(400).json({ success: false, message: "Year is Required" });
        if (!Name) return res.status(400).json({ success: false, message: "Name of Gift is Required" });
        if (!Number) return res.status(400).json({ success: false, message: "Quantity of Gift is Required" });
        if (!Price) return res.status(400).json({ success: false, message: "Price Of Gift is Required" });
        const sql = `INSERT INTO gifts (year, Name, Numbers, Price) VALUES(?, ?, ?, ? )`;
        DB.query(
            sql, [year, Name, Number, Price], (err, results) => {
                if (err) {
                    return res.status(500).json({
                        success: false,
                        message: "Error in Inserting Data in Table",
                        err
                    });
                } else {
                    return res.status(201).json({
                        success: true,
                        message: "Inserting Data Successfully",
                        results
                    });
                }
            }
        );

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in Creating Gift",
            error
        });
    }
};



export const updateGiftController = async (req, res) => {
    try {
        const id = req.params.id;
        const { year, Name, Number, Price } = req.body;
        if (!year) return res.status(400).json({ success: false, message: "Year is Required" });
        if (!Name) return res.status(400).json({ success: false, message: "Name of Gift is Required" });
        if (!Number) return res.status(400).json({ success: false, message: "Quantity of Gift is Required" });
        if (!Price) return res.status(400).json({ success: false, message: "Price Of Gift is Required" });
        const sql = `UPDATE gifts  SET year = ?, Name = ?, Numbers = ? , Price = ? WHERE id = ?`;
        DB.query(
            sql, [year, Name, Number, Price, id], (err, results) => {
                if (err) {
                    return res.status(500).json({
                        success: false,
                        message: "Error in Updating Data in Table",
                        err
                    });
                } else {
                    return res.status(201).json({
                        success: true,
                        message: "Updating Data Successfully",
                        results
                    });
                }
            }
        );

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in Updating Gift",
            error
        });
    }
}

export const deleteGiftController = async (req, res) => {
    try {
        const id = req.params.id;
        const sql = `DELETE FROM gifts  WHERE id = ${id}`;
        DB.query(
            sql, (err, results) => {
                if (err) {
                    return res.status(500).json({
                        success: false,
                        message: "Error in Deleting Data in Table",
                        err
                    });
                } else {
                    return res.status(201).json({
                        success: true,
                        message: "Deleting Data Successfully",
                        results
                    });
                }
            }
        );
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: "Error in Deleting Gift",
            error
        });
    }
};