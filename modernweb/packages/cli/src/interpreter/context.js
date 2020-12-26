const Command = require("./command");

/**
 * @property {Array<String>?} input
 * @property {Command?} output
 */
class Context {
  /** @type {Array<String>?} */
  #input = null;
  /** @type {Command?} */
  output = null;

  constructor(/** @type {Array<String>} */ args) {
    if (args.length <= 2) {
      throw new Error(
        `No arguments provided. Did you forget to include a command?`
      );
    }

    // @ts-ignore Object.freeze => readonly string[]
    this.#input = Object.freeze([...args.slice(2)]);
    this.output = null;
  }

  get input() {
    return this.#input;
  }
}

module.exports = Context;
