import express from "express";
import {
  getCards,
  createCardProduct,
  getProduct,
} from "../controllers/cardProduct.js";

const router = express.Router();

router.get("/", getCards);

router.get("/buy", getProduct);

router.post("/", createCardProduct);

export default router;
