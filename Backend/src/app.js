import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { ApiError } from "./utils/apiError.js";

const app = express();

// Middleware
app.use(cors({
    origin: process.env.CORS_ORIGIN || '*',  // Default to '*' for development
    credentials: true
}));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// Routes Import
import userRouter from './routes/user.routes.js';

// Root Route
app.get("/", (req, res) => {
    res.json({ message: "API is running" });
});

// Routes Declaration
app.use("/api/v1/users", userRouter);

// Centralized Error Handling Middleware
app.use((err, req, res, next) => {
    if (err instanceof ApiError) {
        return res.status(err.statusCode).json({
            success: err.success,
            message: err.message,
            errors: err.errors,
            data: err.data
        });
    }
    console.error(err);
    res.status(500).json({ success: false, message: "Internal Server Error" });
});

export { app };
