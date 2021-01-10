const Command = require("../command");
const Expression = require("../expression");
const Project = require("../../project").Project;
const Context = require("../context");
const Templates = require("./templates");

class NewExpression extends Expression {
  /** @param {Context} context */
  interpret(context) {
    if (context.input?.[0].trim() === "new") {
      context.output = new NewCommand(context);
    }
  }
}

class NewCommand extends Command {
  /** @type {Project?} */
  #project = null;

  /** @param {Context} context */
  constructor(context) {
    super(context);

    this.#project = null;
  }

  execute() {
    this.#project = this.parseArguments();

    // TODO: introduce artificial delays between steps with better messaging / colors
    //       to describe whats happening and why

    try {
      this.#project.create();
      this.createProjectFolders();

      this.#project?.createFile(
        "package.json",
        Templates.PackageJson({ name: this.#project?.name })
      );
      this.#project?.createFile(
        "README.md",
        Templates.ReadMe({ name: this.#project?.name }),
        true
      );
      this.#project?.createFile(".npmrc", "save-exact=true\n");
      this.#project?.createFile(".nvmrc", `v${Templates.NodeVersion}`);
      this.#project?.createFile(".editorconfig", Templates.EditorConfig);
      this.#project?.createFile(".gitignore", Templates.GitIgnore);
      this.#project?.createFile("public/robots.txt", Templates.RobotsTxt);
      this.#project?.createFile(".prettierignore", Templates.PrettierIgnore);
      this.#project?.createFile("tsconfig.json", Templates.TypescriptConfig);
      this.#project?.createFile(
        "src/config/config.js",
        Templates.BaseConfig,
        true
      );

      this.installNode();

      // TODO: create the homepage domain
    } catch (ex) {
      if (ex.code != "EEXIST") this.#project.destroy();

      throw ex;
    }
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
  installNode() {
    // TODO: what if they dont have NVM installed?

    this.#project?.runCommand(`nvm install v${Templates.NodeVersion}`);
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
    const name = this.context?.input?.[1];

    if (!name) {
      throw new Error(`Running the new command requires a project name`);
    }

    return new Project(name, `${this.root}/${name}`);
  }
}

module.exports.NewExpression = NewExpression;
