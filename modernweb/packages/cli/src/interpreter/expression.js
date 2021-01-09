class Expression {
  /**
   * @abstract
   * @param {import('./context')} context
   */
  interpret(context) {
    throw new Error("Not Implemented");
  }
}

module.exports = Expression;
