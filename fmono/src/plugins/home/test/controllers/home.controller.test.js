const Code = require("@hapi/code");
const Lab = require("@hapi/lab");
const td = require("testdouble");

const { HomeController } = require("../../controllers/home.controller");
const FastifyFixtures = require("../../../../../test/fixtures/fastify.fixtures");

const { expect } = Code;
const lab = (exports.lab = Lab.script());
const subject = new HomeController();
const reply = td.object(FastifyFixtures.build("reply"));

lab.experiment("Feature: Home", () => {
  lab.afterEach(() => {
    td.reset();
  });

  lab.test("Rule: returns 200 status", () => {
    subject.index({}, reply);

    expect(reply.statusCode).to.equal(200);

    td.verify(
      reply.view(`plugins/home/views/index.ejs`, {
        title: "FMono | Fastify Monorepo",
        description: "Homepage for FMono, a monorepo built with FastifyJS.",
      })
    );
  });
});
