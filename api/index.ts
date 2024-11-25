import express from "express";
import { VercelRequest, VercelResponse } from "@vercel/node";
import bodyParser from "body-parser";
import bikeRoutes from "../src/routes/bikes";
import connectDB from "../src/config/db";

// Initialize app and connect to DB
connectDB();
const app = express();
app.use(bodyParser.json());
app.use("/api/bikes", bikeRoutes);

// Export handler for Vercel
export default (req: VercelRequest, res: VercelResponse) => {
  app(req, res);
};
