const Command = require("./command");
const Expression = require("./expression");
const Context = require("./context");
const http = require("http");
const fs = require("fs");

class ServerExpression extends Expression {
  /**
   * @param {Context} context
   */
  interpret(context) {
    if (context.input?.[0].trim() === "server") {
      context.output = new ServerCommand(context);
    }
  }
}

class ServerCommand extends Command {
  /** @type {Context?} */
  #context = null;
  /** @type {String?} */
  #root = null;
  #routes = { get: {}, post: {}, put: {}, del: {} };

  constructor(/** @type {Context} */ context) {
    super();

    this.#context = context;
    this.#root = process.cwd();
  }

  execute() {
    const config = require(`${this.#root}/src/config/config`);
    const { port = 3000, host = "localhost" } = config.server;

    this.#loadDomains();
    // TODO: support https?
    const instance = http.createServer((req, res) => {
      try {
        console.log(`🌐 [mweb]: incoming ${req.method} request :: ${req.url}`);

        const method = req.method?.toLowerCase() || "";
        const url = req.url || "";
        // @ts-ignore implicit any
        const { domain, handler } = this.#routes[method]?.[url];
        const [controller, action] = handler.split(".");

        require(`${domain}/controllers/${controller}`)[`${action}`](req, res);
      } catch (ex) {
        console.error(
          `🚨 [mweb]: Unable to route to a valid controller#action => ${ex.message}`
        );
        res.statusCode = 404;
        res.end();
      }
    });

    instance.listen({ port }, () => {
      console.log(`⚡️ [mweb]: Server is listening at http://${host}:${port}`);
    });
  }

  // @ts-ignore method cannot be private
  #loadDomains() {
    const domainsRoot = `${this.#root}/src/domains`;
    const domains = fs.readdirSync(domainsRoot);

    for (let i = 0; i < domains.length; i++) {
      const location = `${domainsRoot}/${domains[i]}`;

      fs.stat(location, (err, stats) => {
        if (stats.isDirectory()) {
          const routes = require(`${location}/config/routes`);

          routes({
            get: (/** @type {Object} */ opts) =>
              this.#loadRoute(location, {
                ...opts,
                method: "get",
              }),
            post: (/** @type {Object} */ opts) =>
              this.#loadRoute(location, {
                ...opts,
                method: "post",
              }),
            put: (/** @type {Object} */ opts) =>
              this.#loadRoute(location, {
                ...opts,
                method: "put",
              }),
            del: (/** @type {Object} */ opts) =>
              this.#loadRoute(location, {
                ...opts,
                method: "del",
              }),
          });
        }
      });
    }
  }

  // @ts-ignore method cannot be private
  #loadRoute(domain, opts = {}) {
    try {
      // @ts-ignore destructuring
      const { method, url, handler } = opts;
      const [controller, action] = handler.split(".");

      require(`${domain}/controllers/${controller}`);

      // @ts-ignore method cannot be private
      this.#routes[method][url] = { domain, handler };
    } catch (ex) {
      console.error(
        `🚨 [mweb]: unable to load route configurations :: ${ex.message}`
      );
      console.error(opts);
    }
  }
}

module.exports.ServerExpression = ServerExpression;
