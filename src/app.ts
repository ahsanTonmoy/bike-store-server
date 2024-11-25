import express from "express";
import bodyParser from "body-parser";
import bikeRoutes from "./routes/bikes";
import connectDB from "./config/db";

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(bodyParser.json());
app.use("/api/bikes", bikeRoutes);

export default app;
