import express from "express";
import {
  getCapsuleData,
  getSingleCapsule,
} from "../controllers/capsuleController.js"; 
import { authenticateUser } from "./../middleware/authmiddle.js";
const router = express.Router();

router.get("/capsule", getCapsuleData ,  authenticateUser);
router.get("/capsules/:id", getSingleCapsule);

export default router;

