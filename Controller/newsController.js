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