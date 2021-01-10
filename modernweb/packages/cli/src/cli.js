#!/usr/bin/env node

const Context = require("./interpreter/context");

/** @typeof {import('./interpreter/expression')[]} */
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

    if (context.output) {
      return context.output.execute();
    }

    throw new Error(`command ${process.argv.join(" ")} is not supported.`);
  } catch (ex) {
    console.error(ex);
  }
})();
