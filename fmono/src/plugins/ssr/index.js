const { SSRController } = require("./controllers/ssr.controller");

const ssrController = new SSRController();

/**
 *
 * @param {import('fastify').FastifyInstance} fastify
 * @param {*} opts
 * @param {Function} done
 */
module.exports = function (fastify, opts, done) {
  fastify.get("/ssr", ssrController.index);

  done();
};
