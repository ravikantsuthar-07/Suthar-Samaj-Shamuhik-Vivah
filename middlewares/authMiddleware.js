import DB from '../DB/connection.js'
import JWT from 'jsonwebtoken'

export const requireSignIn = async (req, res, next) => {
    try {
        const decode = JWT.verify(req.headers.authorization, process.env.JWT_SECRET);
        req.user = decode;
        next();
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Error in Signed",
            error
        });
    }
};

export const isAdmin = async (req, res, next) => {
    try {
        await DB.query(
            `SELECT * FROM admins WHERE id = ${req.user.id}`, (err, result) => {
                if (err) {
                    return res.status(500).json({
                        success: false,
                        message: "Error in Authorision User",
                        err
                    });
                } else {
                    if (result[0].role !== 1) {
                        return res.status(401).json({
                            success: false,
                            message: 'EnAuthorise User'
                        });
                    } else {
                        next()
                    }
                }
            }
        )
    } catch (error) {
        console.log(error);
    }
}