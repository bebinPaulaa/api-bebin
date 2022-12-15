const jwt = require('jsonwebtoken')
const verifyToken = (req, res, next) => {
    const token = req.header('Authorization')
    if (!token) return res.status(400).json({
        status: res.statusCode,
        message: 'Access denied'
    })

    try {
        const verified = jwt.verify(token, process.env.SECRET_KEY) // verify
        res.user = verified
        next() // melanjutkan proses berikutnya
    } catch (error) {
        res.status(400).json({
            status: res.statusCode,
            message: 'Invalid token'
        })
    }
}

module.exports = verifyToken