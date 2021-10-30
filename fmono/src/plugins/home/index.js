const { HomeController } = require("./controllers/home.controller");

const homeController = new HomeController();

/**
 *
 * @param {import('fastify').FastifyInstance} fastify
 * @param {*} opts
 * @param {Function} done
 */
module.exports = function (fastify, opts, done) {
  /*
    TODO: how could you turn this into a fitness function?
          maybe inject a wrapped fastify that would be something like

          server.route({
            method: 'GET',
            path: '/',
            handler: homeController.index,
            apidoc: {
              group: 'Health',
              name: 'GetHealth',
              sample: {
                request: 'http://localhost:4000/health'
              }
            }
          });
  })

  */

  fastify.get("/", homeController.index);

  done();
};
