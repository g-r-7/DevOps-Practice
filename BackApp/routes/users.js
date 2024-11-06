const controller = require("../controllers/users");
const healthController = require("../controllers/health");
const router = require("express").Router();

// CRUD Routes /users

/**
 * @openapi
 * '/users':
 *  get:
 *     tags:
 *     - User Controller
 *     summary: Get all users
 *     responses:
 *      200:
 *        description: Fetched Successfully
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
router.get("/", controller.getUsers); // /users


/**
 * @openapi
 * '/users{userId}':
 *  get:
 *     tags:
 *     - User Controller
 *     summary: Get a user by id
 *     parameters:
 *      - name: userId
 *        in: path
 *        description: The id of the user
 *        required: true
 *     responses:
 *      200:
 *        description: Fetched Successfully
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
router.get("/:userId", controller.getUser); // /users/:userId


/**
 * @openapi
 * '/users':
 *  post:
 *     tags:
 *     - User Controller
 *     summary: Create a user
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - name
 *              - email
 *            properties:
 *              name:
 *                type: string
 *                default: aicha 
 *              email:
 *                type: string
 *                default: aicha@mail.com
 *     responses:
 *      201:
 *        description: Created
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
router.post("/", controller.createUser); // /users


/**
 * @openapi
 * '/users/{userId}':
 *  put:
 *     tags:
 *     - User Controller
 *     summary: Modify a user
 *     parameters:
 *      - name: userId
 *        in: path
 *        description: The unique Id of the user
 *        required: true
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                default: ''
 *              email:
 *                type: string
 *                default: ''
 *     responses:
 *      200:
 *        description: Modified
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
router.put("/:userId", controller.updateUser); // /users/:userId


/**
 * @openapi
 * '/users/{userId}':
 *  delete:
 *     tags:
 *     - User Controller
 *     summary: Delete user by Id
 *     parameters:
 *      - name: userId
 *        in: path
 *        description: The unique Id of the user
 *        required: true
 *     responses:
 *      200:
 *        description: Removed
 *      400:
 *        description: Bad request
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
router.delete("/:userId", controller.deleteUser); // /users/:userId


/**
 * @openapi
 * '/health/ready':
 *  get:
 *     tags:
 *     - Health Check
 *     summary: Readiness check endpoint
 *     responses:
 *      200:
 *        description: The application is ready
 *      500:
 *        description: The application is not ready
 */
router.get("/ready", healthController.getReadiness);


/**
 * @openapi
 * '/health/live':
 *  get:
 *     tags:
 *     - Health Check
 *     summary: Liveness check endpoint
 *     responses:
 *      200:
 *        description: The application is live
 */
router.get("/live", healthController.getLiveness);


module.exports = router;
