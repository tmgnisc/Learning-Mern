const { z } = require("zod");
//creating an object schema
const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be more than 3 characters" })
    .max(255, { message: "Name must be less than 255 characters" }),
  email: z
    .string({ required_error: "email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be more than 3 characters" })
    .max(255, { message: "email should not be more than 255 characters" }),
    phone: z 
    .string({})

});
