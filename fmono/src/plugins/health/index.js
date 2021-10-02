const { HealthController } = require("./controllers/health.controller");

const healthController = new HealthController();

/**
 *
 * @param {import('fastify').FastifyInstance} fastify
 * @param {*} opts
 * @param {Function} done
 */
module.exports = function (fastify, opts, done) {
  /**
   * @api {get} /health
   * @apiDescription health check endpoint
   * @apiGroup Health
   * @apiName GetHealth
   * @apiSampleRequest http://localhost:4000/health
   */
  fastify.get("/health", healthController.index);

  done();
};
