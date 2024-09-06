import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./Routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

// Load environment variables from .env file
dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

// Access http://localhost:5000/
app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server working on PORT ${PORT}`);
});
