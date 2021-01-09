class Command {
  /**
   * @abstract
   */
  execute() {
    throw new Error("Not Implemented!");
  }
}

module.exports = Command;
