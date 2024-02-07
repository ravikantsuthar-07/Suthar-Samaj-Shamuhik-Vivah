export const isAdmin = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.user._id);
        if (user.role !== 1) {
            return res.status(401).send({
                success: false,
                message: 'EnAnthorise User'
            })
        } else {
            next()
        }
    } catch (error) {
        console.log(error);
    }
}