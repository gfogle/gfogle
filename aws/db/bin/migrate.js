const fs = require("fs");
const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");

const client = new DynamoDBClient({
  region: "us-east-1",
});

(async () => {
  const pkg = require("../package.json");
  const dbs = pkg.databases;

  for (var d of dbs) {
    const files = fs.readdirSync(`${__dirname}/../${d}/migrations`);

    for (var f of files) {
      const migration = require(`${__dirname}/../${d}/migrations/${f}`);

      await migration(client);
    }
  }
})();
