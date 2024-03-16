import DB from '../DB/connection.js';
export const getContactController = async (req, res) => {
    try {
        const sql = `SELECT * FROM contacts ORDER BY id DESC`;
        await DB.query(
            sql, (err, results) => {
                if (err) {
                    return res.status(500).json({
                        success: true,
                        message: 'Error in Getting Data from Database',
                        err
                    });
                } else {
                    return res.status(200).json({
                        success: true,
                        message: 'Getting Contact Successfully',
                        results
                    });
                }
            }
        );
    } catch (error) {
        return res.status(500).json({
            success: true,
            message: 'Error in Getting Contact',
            error
        });
    }
}

export const createContactController = async (req, res) => {
    try {
        const {FName, LName, Email, Subject, Message} = req.body;
        if (!FName) {
            return res.status(400).json({
                success: false,
                message: 'Frist Name is Required'
            });
        }

        if (!LName) {
            return res.status(400).json({
                success: false,
                message: 'Last Name is Required'
            });
        }

        if (!Email) {
            return res.status(400).json({
                success: false,
                message: 'Email is Required'
            });
        }

        if (!Subject) {
            return res.status(400).json({
                success: false,
                message: 'Subject is Required'
            });
        }

        if (!Message) {
            return res.status(400).json({
                success: false,
                message: 'Message is Required'
            });
        }
        const FullName = FName + LName;
        const sql = `INSERT INTO contacts (Name, Email, Subject, Message) VALUES(?, ?, ?, ?)`;
        await DB.query(
            sql, [FullName, Email, Subject, Message], (err, results) => {
                if (err) {
                    return res.status(500).json({
                        success: false,
                        message: 'Error in Inserting Data',
                        err
                    });
                } else {
                    return res.status(201).json({
                        success: true,
                        message: 'Contact Form Submit Successfully',
                        results
                    });
                }
            }
        )
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error in Contact Form Submit',
            error
        });
    }
}