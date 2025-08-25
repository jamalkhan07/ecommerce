import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
const port = process.env.PORT || 5000;

connectDB();
const app = express();

// app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {});

app.use("/api/products", productRoutes);
app.use(notFound);
app.use(errorHandler);
app.listen(port, () => console.log(`server is running on port ${port}`));

// mongoose
//   .connect("mongodb://127.0.0.1/playground")
//   .then(() => console.log("Connected to  MongoDB..."))
//   .catch((err) => console.log("Could not connect to MongoDB...", err));
