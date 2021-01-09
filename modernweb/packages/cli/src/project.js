const child_process = require("child_process");
const fs = require("fs");

/**
 * @description a new modernweb Project with a name and directory path
 */
class Project {
  /** @type {child_process.SpawnSyncOptions?} */
  #cmdOptions = null;

  /**
   * @constructor
   * @param {String} name
   * @param {String} directory
   */
  constructor(name, directory) {
    this.name = name;
    this.directory = directory;

    this.#cmdOptions = {
      stdio: `inherit`,
      cwd: this.directory,
      shell: false,
    };
  }

  create() {
    fs.mkdirSync(this.directory);
  }

  /** @param {String} path */
  createDirectory(path) {
    fs.mkdirSync(`${this.directory}/${path}`);
  }

  /**
   *
   * @param {String} name the file you wish to create relative to the project's root
   * @param {String} contents the file's contents
   * @param {Boolean} format format the file after write
   * @example createFile('package.json');
   */
  createFile(name, contents = "", format = false) {
    fs.writeFileSync(`${this.directory}/${name}`, contents, "utf8");

    if (format) this.formatFile(name);
  }

  destroy() {
    fs.rmdirSync(this.directory, {
      recursive: true,
    });
  }

  exists() {
    return fs.existsSync(this.directory);
  }

  /** @param {String} name */
  formatFile(name) {
    const prettier = `${this.directory}/node_modules/.bin/prettier`;
    const file = `${this.directory}/${name}`;

    this.runCommand(`${prettier} "${file}" --write`, {
      shell: true,
    });
  }

  /** @param {String} path */
  removeDirectory(path) {
    if (path === this.directory) {
      throw new Error(
        `Cannot remove the project directory itself. Did you mean .destroy()?`
      );
    } else if (!path.length) {
      throw new Error(`Cannot remove an empty directory`);
    }

    fs.rmdirSync(path, {
      recursive: true,
    });
  }

  /**
   * @description runs a command relative to the project root directory
   * @param {string} cmd - the command to execute
   * @param {child_process.SpawnSyncOptions} options - overridable options
   *
   * @example runCommand('nvm use')
   * @example runCommand('npm install', { shell: true })
   */
  runCommand(cmd, options = {}) {
    child_process.spawnSync(cmd, {
      ...this.#cmdOptions,
      ...options,
    });
  }
}

class Domain extends Project {
  /**
   * @param {String} name
   * @param {String} directory
   */
  constructor(name, directory) {
    super(name, directory);
  }
}

module.exports.Domain = Domain;
module.exports.Project = Project;
