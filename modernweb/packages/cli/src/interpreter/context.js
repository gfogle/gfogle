/**
 * @description Context object used by Interpreter
 *
 * @property {?string[]} input - the user provided input
 * @property {import('./command')?} output - the command to execute if input is valid
 */
class Context {
  /** @type {?string[]} */
  #input = null;

  /** @type {import('./command')?} */
  output = null;

  /**
   * @param {string[]} args
   */
  constructor(args) {
    this.#input = [...args.slice(2)];
    this.output = null;
  }

  get input() {
    return this.#input;
  }
}

module.exports = Context;
