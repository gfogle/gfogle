const Factory = require("rosie").Factory;
const factory = new Factory();

/**
 * @type {import("fastify").FastifyRequest}
 */
class MockReply {
  send() {}
}

Factory.define("reply", MockReply);

module.exports = Factory;
