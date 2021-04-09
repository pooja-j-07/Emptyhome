const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routesurl = require("./Routes");
const cors = require("cors");

dotenv.config();

mongoose.connect(process.env.DATABASE_ACCESS, () =>
  console.log("db connected")
);

app.use(express.json());
app.use(cors());
app.use("/app", routesurl);
app.listen(4000, () => console.log("server is running"));
