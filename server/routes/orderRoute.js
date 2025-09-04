import express from "express";
import {
  placeOrder,
  placeOrderStripe,
  allOrders,
  usersOrders,
  updateStatus,
  verifyStripe,
} from "../controllers/orderController.js";
import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/auth.js";

const orderRouter = express.Router();

// Addmin Features
orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);

// Payment Features
orderRouter.post("/place", authUser, placeOrder);
orderRouter.post("/stripe", authUser, placeOrderStripe);

// User Features
orderRouter.post("/userorders", authUser, usersOrders);

// Verify Payment
orderRouter.post("/verifyStripe", authUser, verifyStripe);

export default orderRouter;
