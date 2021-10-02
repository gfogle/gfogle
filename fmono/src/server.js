const fs = require("fs");
const { fastify: Fastify } = require("fastify");

const fastify = Fastify({
  logger: true,
});

if (process.env.PORT) {
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
