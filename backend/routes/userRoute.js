import express from "express";
import {
  signupController,
  loginController,
  logoutController,
} from "../controllers/userControllers.js";

const router = express.Router();


/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      required:
 *        - username
 *        - email
 *        - password
 *      properties:
 *        id:
 *          type: string
 *          description: The Auto-generated id of user collection
 *          example : DHSASDHJDJHVAJDSVJAVSD
 *        userName:
 *          type: string
 *          description: User  Name
 *        email:
 *          type: string
 *          description: user email address
 *        password:
 *          type: string
 *          description: user password should be at least 6 character long 
 *      example:
 *        id: GDHJGD788BJBJ
 *        username: john_123
 *        email: johndoes@gmail.com
 *        password: ABcdef23
 */

/**
 *  @swagger
 *  tags:
 *    name: Auth
 *    description: authentication apis
 */

/**
 * @swagger
 * /api/auth/signup:
 *    post:
 *      summary: signup new user
 *      tags: [Auth]
 *      requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *      responses:
 *        200:
 *          description: user created successfully
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/User'
 *        500:
 *          description: internal serevr error
 */
/**
 * @swagger
 * /api/auth/login:
 *  post:
 *    summary: login page
 *    tags: [Auth]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/User'
 *    responses:
 *      200:
 *        description: login successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      500:
 *        description: something went wrong
 */

/**
 * @swagger
 * /api/auth/logout:
 *  get:
 *    summary: logout page
 *    tags: [Auth]
 *    responses:
 *      200:
 *        description: logout successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      500:
 *        description: something went wrong
 */

router.post("/signup", signupController);

router.post("/login", loginController);

router.post("/logout", logoutController);

export default router;