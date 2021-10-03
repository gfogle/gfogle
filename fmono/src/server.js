const tracer = require("dd-trace").init();
const fs = require("fs");
const { fastify: Fastify } = require("fastify");

if (process.env.PORT) {
  const fastify = Fastify({
    logger: true,
  });

  /** @type any */
  const pov = require("point-of-view");
  fastify.register(pov, {
    engine: {
      ejs: require("ejs"),
    },
    root: __dirname,
  });

  for (const p of fs.readdirSync("./src/plugins")) {
    try {
      fastify.register(require(`${__dirname}/plugins/${p}`));
    } catch (e) {
      console.error(`failed to load plugin ${p}`, e);
    }
  }

  fastify.listen(process.env.PORT, "0.0.0.0", function (err, address) {
    if (err) {
      fastify.log.error(err);
      process.exit(1);
    }

    fastify.log.info(`server listening on ${address}`);
  });
} else {
  process.exit(1);
}
