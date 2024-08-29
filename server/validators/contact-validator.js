const {z} = require("zod")
const contactSchema = z.object({
    username : z
    .string({required_error: "username is required"})
    .trim()
    .nonempty({message: "username is required"})
    .min(3, {message: "username should be at least 3 character"})
    .max(255, {message:"username cannot be more than 255 character"}),

    email: z 
    .string({required_error: "email is required"})
    .trim()
    .nonempty({message: "email is required"})
    .email({message: "invalid email address"})
    .min(3, {message: "email should be at least more than 3 character"})
    .max(255, {message: "email must be more than 255 character"}),

    message: z 
    .string({required_error : "message is required"})
    .trim()
    .nonempty({message: "message is required"})
    .min(3, {message :"minimum 3 character is required"})
    .max(255, {message: "more than 255 character is not allowed"})

})

module.exports = contactSchema