const Context = require("./context");

class Command {
  /**
   * @type {Context?}
   * @protected
   */
  context = null;
  /**
   * @description the root directory the command was executed from
   * @type {String?}
   * @protected
   */
  root = null;

  /** @param {Context} context */
  constructor(context) {
    this.context = context;
    this.root = process.cwd();
  }

  execute() {
    throw new Error("Not Implemented!");
  }
}

module.exports = Command;
