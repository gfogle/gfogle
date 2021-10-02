const Code = require("@hapi/code");
const Lab = require("@hapi/lab");
const td = require("testdouble");

const { HealthController } = require("../../controllers/health.controller");
const FastifyFixtures = require("../../../../../test/fixtures/fastify.fixtures");

const { expect } = Code;
const lab = (exports.lab = Lab.script());

lab.experiment("Feature: Health Checks", () => {
  lab.afterEach(() => {
    td.reset();
  });

  lab.test("Rule: returns 200 status", () => {
    const reply = td.object(FastifyFixtures.build("reply"));

    new HealthController().index({}, reply);

    expect(reply.statusCode).to.equal(200);
    td.verify(reply.send());
  });
});
