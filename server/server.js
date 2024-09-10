require("dotenv").config();
const express = require("express");
const cors = require("cors")
const app = express();

const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router")
const serviceRoute = require("./router/service-router")
const connectDb = require("./utils/db");
const errorMiddleware = require("./middleware/error-middleware");

//handline cors policy issue
const corsOptions ={
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DElETE, PATCH",
  credentials: true,
}
app.use(cors(corsOptions))
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute)
app.use("/api/data", serviceRoute)
app.use(errorMiddleware);
const port = 5000;
connectDb().then(() => {
  app.listen(port, () => {
    console.log(`server is running in port ${port}`);
  });
});
