import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import path from "path";
import morgan from "morgan";

// import routes
import userRoutes from "./routes/userRoutes.js";
import uploadsRoutes from "./routes/uploadsRoutes.js";
import businessRoutes from "./routes/businessRoutes.js";

// configure dotenv
dotenv.config();

// connect to database
connectDB();

// init express app
const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

// using routes
app.use("/api/business", businessRoutes);

app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});

// static folder
const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// production mode
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running");
  });
}

// error handling middleware
app.use(notFound);
app.use(errorHandler);

// app listen on port
const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`server started on port ${PORT}`.green.inverse.bold)
);
