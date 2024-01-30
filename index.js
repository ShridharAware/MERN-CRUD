const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute");

const cors = require("cors");

const port = process.env.PORT;
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

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    name: "Shridhar",
    contact: 8999615618,
  });
});

app.use("/user", userRoute);

app.listen(port, () => {
  console.log("Server is listening on ", port);
});
