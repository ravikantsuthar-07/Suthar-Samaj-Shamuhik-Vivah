import Register from '../Models/registerModels.js';
import { comparePassword, hashPassword } from '../helpers/registerHelper.js';
import JWT from 'jsonwebtoken'
export const createController = async (req, res) => {
    try {

        const { name, mobileNo, email, password } = req.fields;
        if (!name) {
            return res.status(500).send({
                success: false,
                message: "Name is Required"
            });
        }
        if (!email) {
            return res.status(500).send({
                success: false,
                message: "Email is Required"
            });
        }
        if (!mobileNo) {
            return res.status(500).send({
                success: false,
                message: "Mobile Number is Required"
            });
        }
        if (!password) {
            return res.status(500).send({
                success: false,
                message: "Password is Required"
            });
        }

        const check = await Register.findOne({ email });
        if (check) {
            return res.status(304).send({
                success: true,
                message: 'Email Already register'
            });
        }
        const hashedPassword = await hashPassword(password);

        const user = await Register({ name, email, password: hashedPassword, phone: mobileNo }).save();
        if (user) {
            return res.status(201).send({
                success: true,
                message: "User Register Successfully",
                user
            });
        }
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
        const { email, password } = req.fields;
        if (!email) {
            return res.status(500).send({
                success: false,
                message: "Email is Required"
            });
        }
        if (!password) {
            return res.status(500).send({
                success: false,
                message: "Password is Required"
            });
        }
        const user = await Register.findOne({ email });
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "Email is Not Registered"
            });
        }
        console.log("RAvi");
        const match = await comparePassword(password, user.password);
        console.log("RAvi");
        if (!match) {
            return res.send({
                status: 200,
                success: false,
                message: "Invalid Password"
            })
        }
        const token = await JWT.sign({ _id: user.id }, process.env.JWT_SECRET, { expiresIn: '5d' });
        return res.status(200).send({
            success: true,
            message: "Login Successfully",
            user,
            token
        });
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: "Error in Login of Admin",
            error
        });
    }
};