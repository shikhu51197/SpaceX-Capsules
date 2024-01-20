import express from "express";
import {
  getCapsuleData,
  getSingleCapsule,
} from "../controllers/capsuleController.js"; 
import { authenticateUser } from "./../middleware/authmiddle.js";
const router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Mission:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *        flight:
 *          type: string
 *
 *    Capsule:
 *      type: object
 *      properties:
 *        capsule_serial:
 *          type: string
 *        capsule_id:
 *          type: string
 *        status:
 *          type: string
 *        original_launch:
 *          type: string
 *        original_launch_unix:
 *          type: string
 *        missions:
 *          type: array
 *          items:
 *            $ref: '#/components/schemas/Mission'
 *        landings:
 *          type: string
 *        type:
 *          type: string
 *        details:
 *          type: string
 *        reuse_count:
 *          type: number
 *        createdAt:
 *          type: string
 *          format: date-time
 *      required:
 *        - capsule_serial
 *        - capsule_id
 *        - status
 *        - original_launch
 *        - original_launch_unix
 *      example:
 *        capsule_serial: "ABC123"
 *        capsule_id: "XYZ456"
 *        status: "Active"
 *        original_launch: "2023-01-01"
 *        original_launch_unix: "1609459200"
 *        missions:
 *          - name: "Mission1"
 *            flight: "Flight1"
 *          - name: "Mission2"
 *            flight: "Flight2"
 *        landings: "2"
 *        type: "Type1"
 *        details: "Details about the capsule"
 *        reuse_count: 3
 *        createdAt: "2023-01-01T12:00:00Z"
 */

/**
 * @swagger
 * /api/capsule:
 *  get:
 *    summary: Get information about capsules
 *    description: Retrieve information about capsules.
 *    tags: [Capsules]
 *    responses:
 *      200:
 *        description: Successful response with capsule data
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Capsule'
 *      500:
 *        description: Internal server error
 */


router.get("/capsule", getCapsuleData ,  authenticateUser);
router.get("/capsules/:id", getSingleCapsule);

export default router;

