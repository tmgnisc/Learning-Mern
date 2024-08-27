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
    .string({ required_error: "Phone number is required" })
    .trim()
    .min(3, { message: "phone must be at least 3 character" })
    .max(255, { message: "number must be less than 255 characters" }),
  password: z
    .string({ required_error: "password is required" })
    .trim()
    .min(3, { message: "password should be minimum 3 character" })
    .max(255, { message: "password must not be more than 255 characters" })
});

const loginSchema = z.object({

  email: z.string({required_error: "Email is required"})
  .trim()
  .email({ message: "invalid email address"})
  .min(3, {message: "email must be more than 3 characters"})
  .max(255, {message: "email must be less than 255 characters"}),

  password: z
  .string({ required_error: "password is required" })
  .trim()
  .min(3, { message: "password should be minimum 3 character" })
  .max(255, { message: "password must not be more than 255 characters" })

})
module.exports = {signupSchema, loginSchema}
