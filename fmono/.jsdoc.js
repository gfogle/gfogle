const fs = require("fs");
const paths = [];

paths.push("src/libs");

module.exports = {
  source: {
    include: paths,
  },
  tags: {
    allowUnknownTags: true,
  },
};
