const fs = require("fs");
const paths = [];
const coverageExclude = [];

paths.push("test");
coverageExclude.push("test");

for (const p of fs.readdirSync(`${__dirname}/src/plugins`)) {
  paths.push(`src/plugins/${p}/test`);
  coverageExclude.push(`src/plugins/${p}/test`);
}

module.exports = {
  "coverage-exclude": coverageExclude,
  paths,
};
