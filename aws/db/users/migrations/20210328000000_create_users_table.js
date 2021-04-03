// TODO: move this to a binstub and inject into the up/down

const {
  CreateTableCommand,
  DescribeTableCommand,
} = require("@aws-sdk/client-dynamodb");

module.exports = async function (client) {
  try {
    const command = new DescribeTableCommand({
      TableName: "users",
    });
    const data = await client.send(command);

    if (data) {
      throw new Error("Table should not exist");
    }
  } catch (err) {
    if (err.name != "ResourceNotFoundException") {
      console.error(err);
      process.exit(1);
    }
  }

  try {
    const command = new CreateTableCommand({
      TableName: "users",
      AttributeDefinitions: [
        { AttributeName: "id", AttributeType: "S" },
        { AttributeName: "email", AttributeType: "S" },
        { AttributeName: "firstName", AttributeType: "S" },
        { AttributeName: "lastName", AttributeType: "S" },
      ],
      KeySchema: [
        { AttributeName: "id", KeyType: "HASH" }, //Partition key
        // { AttributeName: "title", KeyType: "RANGE" }, //Sort key
      ],
      ProvisionedThroughput: {
        ReadCapacityUnits: 10,
        WriteCapacityUnits: 10,
      },
    });
    const data = await client.send(command);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
