const validate = (schema) => async (req, res, next) => {
    try {
        const pareseBody = await schema.parseAsync(req.body)
        req.body = pareseBody
        next()
    } catch (error) {
        res.status(400).json({msg:error})
    }
} 
module.exports = validate