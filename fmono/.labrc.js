const fs = require("fs");
const paths = [];

for (const p of fs.readdirSync(`${__dirname}/src/plugins`)) {
  paths.push(`src/plugins/${p}/test`);
}

module.exports = {
  paths,
};
