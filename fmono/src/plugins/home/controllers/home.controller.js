class HomeController {
  /**
   *
   * @param {import("fastify").FastifyRequest} request
   * @param {import("fastify").FastifyReply} reply
   */
  index(request, reply) {
    reply.statusCode = 200;
    reply.view(`plugins/home/views/index.ejs`, {
      title: "FMono | Fastify Monorepo",
      description: "Homepage for FMono, a monorepo built with FastifyJS.",
    });
  }
}

module.exports.HomeController = HomeController;
