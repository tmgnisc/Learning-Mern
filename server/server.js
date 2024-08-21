require("dotenv").config();
const express = require("express");
const app = express();

const router = require("./router/auth-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middleware/error-middleware");
app.use(express.json());
app.use("/api/auth", router);
app.use(errorMiddleware);
const port = 5000;
connectDb().then(() => {
  app.listen(port, () => {
    console.log(`server is running in port ${port}`);
  });
});
