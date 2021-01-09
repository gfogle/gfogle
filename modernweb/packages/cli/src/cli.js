#!/usr/bin/env node

const Context = require("./interpreter/context");
const DomainExpression = require("./interpreter/domain").DomainExpression;
const NewExpression = require("./interpreter/new").NewExpression;
const ServerExpression = require("./interpreter/server").ServerExpression;

(async () => {
  try {
    const context = new Context(process.argv);

    [new DomainExpression(), new NewExpression(), new ServerExpression()].some(
      (e) => {
        e.interpret(context);

        return context.output !== null;
      }
    );

    if (!context.output) {
      throw new Error(`command ${process.argv.join(" ")} is not supported.`);
    }

    context.output.execute();
  } catch (ex) {
    console.error(ex);
  }
})();
