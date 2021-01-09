const Command = require("./command");
const Domain = require("../project").Domain;
const Expression = require("./expression");
const Context = require("./context");

class DomainExpression extends Expression {
  /**
   * @param {Context} context
   */
  interpret(context) {
    if (context?.input?.[0].trim() === "domain" && context?.input?.[1]) {
      context.output = new DomainCommand(context);
    }
  }
}

class DomainCommand extends Command {
  /** @type {Context?} */
  #context = null;
  /** @type {String?} */
  #root = null;
  /** @type {Domain?} */
  #domain = null;

  constructor(/** @type {Context} */ context) {
    super();

    this.#context = context;
    this.#root = process.cwd();
  }

  execute() {
    this.#domain = this.#parseArguments();

    try {
      this.#domain.create();
      this.#createDomainFolders();
      this.#createControllerFile();
      this.#createDomainConfigs();
      this.#createRoutesFile();
      // TODO: this.#createRoutesFile();
    } catch (ex) {
      if (ex.code != "EEXIST") {
        this.#domain?.destroy();
      }

      throw ex;
    }
  }

  // @ts-ignore method cannot be private
  #createControllerFile() {
    // TODO: this wont get formatted because prettier needs to run at the global root not the domain root
    this.#domain?.createFile(
      `controllers/${this.#domain.name}_controller.js`,
      `
      class Controller {
        static index(req, res) {
          try {
            res.statusCode = 200;
            res.write(\`<h1>${this.#domain.name}</h1>\`);
            res.end();
          } catch (ex) {
            res.statusCode = 400;
            res.end();
          }
        }
      }

      module.exports = Controller;
      `
    );
  }

  // @ts-ignore method cannot be private
  #createDomainConfigs() {
    const projectConfig = JSON.stringify({}, null, 2);

    this.#domain?.createFile(
      "config/config.js",
      `module.exports = ${projectConfig};`
    );
  }

  // @ts-ignore method cannot be private
  #createDomainFolders() {
    const topLevelFolders = ["config", "controllers"];

    for (let i = 0; i < topLevelFolders.length; i++) {
      this.#domain?.createDirectory(`${topLevelFolders[i]}`);
    }
  }

  // @ts-ignore method cannot be private
  #createRoutesFile() {
    // TODO: add type annotations?
    this.#domain?.createFile(
      "config/routes.js",
      `
      module.exports = function({ get, post, put, del }) {
        // Using these functions, register routes i.e. get({ url: "/", handler: "domain_controller.action" })
      };
      `
    );
  }

  /**
   * @function parseArguments
   * @description parses inputs in context into a Domain
   *
   * @throws {Error}
   * @returns {Domain} a domain object instance with details from user
   */
  // @ts-ignore method cannot be private
  #parseArguments() {
    const name = this.#context?.input?.[1];
    if (!name) {
      throw new Error(`Running the domain command requires a domain name`);
    }

    // TODO: convert from camel/pascal to underscores
    return new Domain(name.toLowerCase(), `src/domains/${name.toLowerCase()}`);
  }
}

module.exports.DomainExpression = DomainExpression;
