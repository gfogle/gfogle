const Command = require("./command");
const Expression = require("./expression");
const Project = require("../project").Project;
const Context = require("./context");

class NewExpression extends Expression {
  /**
   * @param {Context} context
   */
  interpret(context) {
    if (context.input?.[0].trim() === "new") {
      context.output = new NewCommand(context);
    }
  }
}

class NewCommand extends Command {
  /** @type {Context?} */
  #context = null;
  /** @type {String?} */
  #root = null;
  /** @type {Project?} */
  #project = null;
  #NODE_VERSION = "14.15.0";

  constructor(/** @type {Context} */ context) {
    super();

    this.#context = context;
    this.#root = null;
    this.#project = null;
    this.#NODE_VERSION = "14.15.0";
  }

  execute() {
    this.#root = process.cwd();
    this.#project = this.parseArguments();

    // TODO: introduce artificial delays between steps with better messaging / colors
    //       to describe whats happening and why

    try {
      this.#project.create();
      this.createPackageJson();
      this.installNode();

      this.createProjectFolders();
      this.createReadme();

      this.createEditorConfig();
      this.createGitignore();
      this.createRobots();
      this.createPrettierIgnore();
      this.createTsConfig();
      this.createProjectConfigs();

      // TODO: create the homepage domain
    } catch (ex) {
      if (ex.code != "EEXIST") this.#project.destroy();

      throw ex;
    }
  }

  /** @private */
  createEditorConfig() {
    // TODO: format this w/o prettier erroring
    this.#project?.createFile(
      ".editorconfig",
      `
      # http://editorconfig.org
      root = true

      [*]
      charset = utf-8
      end_of_line = lf
      indent_size = 2
      indent_style = space
      insert_final_newline = true
      max_line_length = 80
      trim_trailing_whitespace = true
      `
    );
  }

  /** @private */
  createGitignore() {
    // TODO: format this w/o prettier erroring
    this.#project?.createFile(
      ".gitignore",
      `
      build
      node_modules
      public
      !public/robots.txt
      tmp/*
      *.secrets.*
      `
    );
  }

  /** @private */
  createPackageJson() {
    // TODO: when eslint supports private class fields w/o needing babel-eslint, update this?
    this.#project?.createFile(
      "package.json",
      JSON.stringify(
        {
          dependencies: {},
          devDependencies: {
            "@types/node": "14.14.16",
            prettier: "2.2.1",
            typescript: "4.1.3",
          },
          engines: {
            node: `>=${this.#NODE_VERSION}`,
          },
          name: this.#project.name,
          // https://prettier.io/docs/en/options.html
          prettier: {
            semi: true,
          },
          scripts: {
            "lint:node": "./node_modules/.bin/tsc --diagnostics --noEmit",
            start: "./node_modules/.bin/ts-node ./src/server.js",
          },
        },
        null,
        2
      ),
      false
    );
  }

  /** @private */
  createPrettierIgnore() {
    // TODO: format this w/o prettier erroring
    this.#project?.createFile(
      ".prettierignore",
      `
      node_modules
      tmp
      public
      `
    );
  }

  /** @private */
  createProjectConfigs() {
    const projectConfig = JSON.stringify(
      {
        server: {
          port: 3000,
        },
      },
      null,
      2
    );

    this.#project?.createFile(
      "src/config/config.js",
      `module.exports = ${projectConfig};`,
      true
    );
  }

  /** @private */
  createProjectFolders() {
    const topLevelFolders = [
      "src",
      "src/config",
      "src/domains",
      "public",
      "public/images",
    ];

    for (let i = 0; i < topLevelFolders.length; i++) {
      this.#project?.createDirectory(topLevelFolders[i]);
    }
  }

  /** @private */
  createReadme() {
    this.#project?.createFile(
      "README.md",
      `
      #${this.#project?.name}
      Document whatever steps are necessary to get the run, build, test and deploy your app.
      `,
      true
    );
  }

  /** @private */
  createRobots() {
    // TODO: format this w/o prettier erroring
    this.#project?.createFile(
      "public/robots.txt",
      `
      User-agent: *
      Allow: /
      `
    );
  }

  /** @private */
  createTsConfig() {
    this.#project?.createFile(
      "tsconfig.json", // https://www.typescriptlang.org/tsconfig
      JSON.stringify(
        {
          compilerOptions: {
            target: "es2020",
            lib: ["es2020"],
            module: "commonjs",
            rootDir: "./",
            outDir: "./build",
            esModuleInterop: true,
            strict: true,
            skipLibCheck: true,
            noImplicitAny: true,
            allowJs: true,
            checkJs: true,
          },
          include: ["src/**/*.js"],
          exclude: ["node_modules"],
        },
        null,
        2
      ),
      false
    );
  }

  /** @private */
  installNode() {
    const nodeVersion = `v${this.#NODE_VERSION}`;

    // TODO: what if they dont have NVM installed?

    this.#project?.createFile(".npmrc", "save-exact=true\n");
    this.#project?.createFile(".nvmrc", `${nodeVersion}`);

    this.#project?.runCommand(`nvm install ${nodeVersion}`);
    this.#project?.runCommand(`nvm use`);
    this.#project?.runCommand(`npm install`, { shell: true });
  }

  /**
   * @function parseArguments
   * @private
   * @description parses inputs in context into a Project
   *
   * @throws {Error}
   * @returns {Project} a project object instance with details from user
   */
  parseArguments() {
    const name = this.#context?.input?.[1];

    if (!name) {
      throw new Error(`Running the new command requires a project name`);
    }

    return new Project(name, `${this.#root}/${name}`);
  }
}

module.exports.NewExpression = NewExpression;
