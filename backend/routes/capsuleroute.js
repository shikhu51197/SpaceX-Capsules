import express from "express";
import {
  getCapsuleData,
  getSingleCapsule,
} from "../controllers/capsuleController.js"; 

const router = express.Router();

router.get("/capsule", getCapsuleData);
router.get("/capsules/:id", getSingleCapsule);

export default router;
