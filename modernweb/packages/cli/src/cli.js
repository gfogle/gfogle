#!/usr/bin/env node

const Context = require("./interpreter/context");

const expressions = [
  require("./interpreter/domain").DomainExpression,
  require("./interpreter/new").NewExpression,
  require("./interpreter/server").ServerExpression,
];

(async () => {
  try {
    const context = new Context(process.argv);

    expressions.some((e) => {
      new e().interpret(context);

      return context.output !== null;
    });

    if (!context.output) {
      throw new Error(`command ${process.argv.join(" ")} is not supported.`);
    }

    context.output.execute();
  } catch (ex) {
    console.error(ex);
  }
})();
