const Context = require("./context");
const Command = require("./command");

class Interpreter {
  /**
   * @description translates raw stdin into a command to execute
   * @param {Array<String>} stdin array-like command line inputs given by a user
   * @returns {Command?} a command to execute
   */
  static interpret(stdin) {
    const context = new Context(stdin);

    [
      require("./commands/domain").DomainExpression,
      require("./commands/new").NewExpression,
      require("./commands/server").ServerExpression,
    ].some(
      // @ts-ignore => doesnt like that interpret is static on the class
      (e) => e.interpret(context)?.output
    );

    return context.output;
  }
}

module.exports = Interpreter;
