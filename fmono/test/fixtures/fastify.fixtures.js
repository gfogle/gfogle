const Factory = require("rosie").Factory;
const factory = new Factory();

/**
 * @type {import("fastify").FastifyRequest}
 */
class MockReply {
  send() {}
  setCookie() {}
  view() {}
}

Factory.define("reply", MockReply);

module.exports = Factory;
