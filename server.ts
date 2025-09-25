import { VercelRequest, VercelResponse } from "@vercel/node";
import express from "express";
import connectDB from "./utils/db";
import { v2 as cloudinary } from "cloudinary";

const app = express();

// Middleware & routes
app.use(express.json());

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME as string,
  api_key: process.env.CLOUD_API_KEY as string,
  api_secret: process.env.CLOUD_SECRET_KEY as string,
});

// Sample API endpoint
app.get("/api/hello", async (req, res) => {
  // Example DB connection
  await connectDB();
  res.status(200).json({ message: "Hello from Vercel serverless!" });
});

// Export default handler
export default (req: VercelRequest, res: VercelResponse) => app(req, res);
