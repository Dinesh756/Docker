const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.log("❌ MongoDB error", err));

app.get("/", (req, res) => res.send("Backend running 🚀"));

const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

app.listen(process.env.PORT, () => console.log("✅ Backend running on port 5000"));
