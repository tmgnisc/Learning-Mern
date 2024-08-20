const { z } = require("zod");
//creating an object schema
const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be more than 3 characters" })
    .max(255, { message: "Name must be less than 255 characters" }),
});
