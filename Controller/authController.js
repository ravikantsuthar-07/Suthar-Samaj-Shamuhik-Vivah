import { comparePassword, hashPassword } from '../helpers/registerHelper.js';
import JWT from 'jsonwebtoken';
import DB from '../DB/connection.js';
export const createController = async (req, res) => {
    try {

        const { name, mobileNo, email, password } = req.body;
        console.log(req.body);
        if (!name) {
            return res.status(400).send({
                success: false,
                message: "Name is Required"
            });
        }
        if (!email) {
            return res.status(400).send({
                success: false,
                message: "Email is Required"
            });
        }
        if (!mobileNo) {
            return res.status(400).send({
                success: false,
                message: "Mobile Number is Required"
            });
        }
        if (!password) {
            return res.status(400).send({
                success: false,
                message: "Password is Required"
            });
        }

        const hashedPassword = await hashPassword(password);
        await DB.query(
            `SELECT email, name From admins WHERE email = '${email}'`, (err, results) => {
                if (err) {
                    console.log('ERR');
                    return res.status(500).json({
                        success: false,
                        message: 'Error in Insert User in Table',
                        err
                    });
                } else {
                    if (results.length > 0) {
                        return res.status(400).json({
                            success: false,
                            message: 'Email Already register',
                            results
                        });
                    }
                }
            }
        );

        const sql = `INSERT INTO admins (name, email, phone, password) VALUES( ?, ?, ?, ? )`;
        await DB.query(
            sql, [name, email, mobileNo, hashedPassword], (err, results) => {
                if (err) {
                    return res.status(500).json({
                        success: false,
                        message: "Error in Insert a new User",
                        err
                    });
                } else {
                    return res.status(201).json({
                        success: true,
                        message: "User Register Successfully",
                        results
                    });
                }
            }
        );


    } catch (error) {
        return res.status(500).send({
            success: false,
            message: "Error in Register",
            error
        });
    }
};


export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email) {
            return res.status(400).send({
                success: false,
                message: "Email is Required"
            });
        }
        if (!password) {
            return res.status(400).send({
                success: false,
                message: "Password is Required"
            });
        }

        const abc =  async (password , results) => {
            const match = await  comparePassword(password, results[0].password)
            if (match) {
                const token = await JWT.sign({id: results[0].id }, process.env.JWT_SECRET, {expiresIn: '1d'});
                return res.status(200).json({
                    success: true,
                    message: "Login Successfully",
                    results,
                    token
                });
            } else {
                return res.status(401).json({
                    success: false,
                    message: "Invalid password"
                })
            }
        }
        await DB.query(
            `SELECT * From admins WHERE email = ?`, [email], (err, results) => {
                if (err) {
                    return res.status(500).json({
                        success: false,
                        message: 'Error in Login User ',
                        err
                    })
                } else {
                    if (results.length === 0) {
                        return res.status(401).json({
                            success: false,
                            message: `${email} is Not Registered`
                        });
                    } else {
                        abc(password, results);
                    }
                }
            }
        );
 
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: "Error in Login of Admin",
            error
        });
    }
};