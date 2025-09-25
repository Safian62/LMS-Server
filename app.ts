import { VercelRequest, VercelResponse } from "@vercel/node";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { ErrorMiddleware } from "./middleware/error";
import userRouter from "./routes/userRout";
import courseRouter from "./routes/courseRout";
import orderRouter from "./routes/orderRout";
import notificationRouter from "./routes/notificationRout";
import analyticRouter from "./routes/analyticsRout";
import layoutRouter from "./routes/layoutRout";
import { rateLimit } from "express-rate-limit";
import connectDB from "./utils/db";

// Initialize Express app
const app = express();

// BODY PARSER
app.use(express.json({ limit: "50mb" }));

// COOKIE PARSER
app.use(cookieParser());

// CORS
app.use(
  cors({
    origin: ["https://lms-client-theta-black.vercel.app"], // replace with your frontend URL
    credentials: true,
  })
);

// Rate Limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(limiter);

// Connect to DB (optional: per request for serverless)
connectDB().catch((err) => console.error(err));

// ROUTES
app.use("/api/v1", userRouter);
app.use("/api/v1", courseRouter);
app.use("/api/v1", orderRouter);
app.use("/api/v1", notificationRouter);
app.use("/api/v1", analyticRouter);
app.use("/api/v1", layoutRouter);

// TEST ROUTE
app.get("/test", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "API is working successfully",
  });
});

// ERROR HANDLING
app.use(ErrorMiddleware);

// EXPORT AS VERCEL HANDLER
export default (req: VercelRequest, res: VercelResponse) => app(req, res);
