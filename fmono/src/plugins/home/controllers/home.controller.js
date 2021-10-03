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
      partials: {
        header: "../../shared/views/partials/_header.ejs",
        meta: "../../shared/views/partials/_meta.ejs",
        polyfills: "../../shared/views/partials/_polyfills.ejs",
      },
    });
  }
}

module.exports.HomeController = HomeController;
