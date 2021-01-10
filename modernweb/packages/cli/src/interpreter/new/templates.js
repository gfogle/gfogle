const LOWEST_NODE_VERSION = "14.15.0";

module.exports.BaseConfig = `
module.exports = {
  server: {
    port: 3000,
  },
};
`;

module.exports.EditorConfig = `
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
`;

module.exports.GitIgnore = `
# Node.js
node_modules

# Publicly exposed web assets
public
!public/robots.txt

# Private keys, etc.
.env
*.secrets.*
`;

module.exports.NodeVersion = LOWEST_NODE_VERSION;

/**
 *
 * @param {{
 * name: string
 * }} param0
 */
module.exports.PackageJson = ({ name }) =>
  JSON.stringify(
    {
      dependencies: {},
      devDependencies: {
        "@types/node": "14.14.16",
        prettier: "2.2.1",
        typescript: "4.1.3",
      },
      engines: { node: `>=${LOWEST_NODE_VERSION}` },
      name,
      // https://prettier.io/docs/en/options.html
      prettier: {
        // TODO: set options to current defaults for future proof version bumps
        semi: true,
      },
      scripts: {
        "lint:node": "./node_modules/.bin/tsc --diagnostics --noEmit",
        // TODO: once published to NPM have this invoke mweb cli
        start: "./node_modules/.bin/ts-node ./src/server.js",
      },
    },
    null,
    2
  );

module.exports.PrettierIgnore = `
# Node.js
node_modules

# Publicly exposed web assets
public
`;

/**
 *
 * @param {{
 * name: string
 * }} param0
 */
module.exports.ReadMe = ({ name }) => `
#${name}
Document whatever steps are necessary to get the run, build, test and deploy your app.
`;

module.exports.RobotsTxt = `
User-agent: *
Allow: /
`;

module.exports.TypescriptConfig = JSON.stringify(
  // https://www.typescriptlang.org/tsconfig
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
);
