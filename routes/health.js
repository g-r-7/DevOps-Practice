const healthController = require("../controllers/health");
const router = require("express").Router();


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
