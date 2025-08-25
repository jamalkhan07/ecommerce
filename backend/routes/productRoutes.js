import express from "express";
import {
  getProductById,
  getProducts,
} from "../controllers/productController.js";
const router = express.Router();

router.route("/").get(getProducts); //first way

router.get("/:id", getProductById); //second way

export default router;
