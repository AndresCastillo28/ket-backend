const express = require("express");
const { sendResponse } = require("./utils/responseHandler");
const connectDB = require("./config/db");

require("dotenv").config();

//Import CORS
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 3000;

//Implement CORS
app.use(cors());

connectDB();

app.get("/", (req, res) => {
  sendResponse(res, true, 200, "Api running! Happy hacking...");
});

app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/roles", require("./routes/role"));

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
