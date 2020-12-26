#!/usr/bin/env node

const Interpreter = require("./interpreter/interpreter");

(async () => {
  try {
    const command = Interpreter.interpret(process.argv);

    if (!command) {
      throw new Error(`command ${process.argv.join(" ")} is not supported.`);
    }

    command.execute();
  } catch (ex) {
    console.error(ex);
  }
})();
