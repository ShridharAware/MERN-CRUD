require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute");

const cors = require("cors");

const port = 5000;
const uri = process.env.MONGO_URL;

mongoose
  .connect(uri)
  .then(() => {
    console.info("Connected");
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();

app.use(
  cors({
    origin: ["https://crud-frontend-coral.vercel.app", "http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/user", userRoute);

app.listen(port, () => {
  console.log("Server is listening on ", port);
});
