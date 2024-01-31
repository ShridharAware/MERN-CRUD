const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute");

const cors = require("cors");

const port = 5000;
const uri =
  "mongodb://shreedhar0:Shridhar0@ac-xoca1fm-shard-00-00.atgnax4.mongodb.net:27017,ac-xoca1fm-shard-00-01.atgnax4.mongodb.net:27017,ac-xoca1fm-shard-00-02.atgnax4.mongodb.net:27017/dsabuster?ssl=true&replicaSet=atlas-zth8kj-shard-0&authSource=admin&retryWrites=true&w=majority";
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
