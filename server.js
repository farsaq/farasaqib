import express from "express";
import User from "./models/User.js";
import userRoutes from "./routes/userRoutes.js";
import 'dotenv/config';
import connectDB from "./config/db.js"; // ✅ default import

const app = express();

connectDB();

app.use(express.json());
app.use("/api/users", userRoutes);
app.get("/", (req, res) => {
  res.send("Backend running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
