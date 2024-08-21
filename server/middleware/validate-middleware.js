const validate = (schema) => async (req, res, next) => {
    try {
        const pareseBody = await schema.parseAsync(req.body)
        req.body = pareseBody
        next()
    } catch (err) {
        
        const message = err.errors.message 
        console.log(message)
        res.status(400).json({msg: message})
    }
} 
module.exports = validate
