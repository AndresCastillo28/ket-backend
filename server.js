const express = require("express");
const { sendResponse } = require("./utils/responseHandler");
const connectDB = require("./config/db");

require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;

connectDB();

app.get("/", (req, res) => {
  sendResponse(res, true, 200, "Api running! Happy hacking...");
});

app.use(express.json());

app.use("/api/auth", require("./routes/auth"));

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
