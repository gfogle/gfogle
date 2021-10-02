class HealthController {
  /**
   *
   * @param {import("fastify").FastifyRequest} request
   * @param {import("fastify").FastifyReply} reply
   */
  index(request, reply) {
    reply.statusCode = 200;
    reply.send();
  }
}

module.exports.HealthController = HealthController;
