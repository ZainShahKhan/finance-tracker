const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const cors = require("cors");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:3000"}));

app.use("/api/auth", require("./routes/auth"));
app.use("/api/transactions", require("./routes/transaction"));

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
