const child_process = require("child_process");
const fs = require("fs");

function parseArguments(args) {
  return args.reduce((map, arg) => {
    const splitOnEquals = arg.split("=");

    if (splitOnEquals.length == 2) {
      switch (splitOnEquals[0]) {
        case "url":
          map["url"] = splitOnEquals[1];
          break;
      }
    }

    return map;
  }, {});
}

function execLighthouse(url) {
  return new Promise((resolve, reject) => {
    const start = new Date();
    console.log(`starting audit at ${start.toISOString()}`);

    const cwd = `${__dirname}/..`;
    const cmd = `${cwd}/node_modules/.bin/lighthouse`;
    const opts = [
      url,
      "--output=json",
      "--output-path=stdout",
      "--disable-device-emulation",
      "--disable-cpu-throttling",
      "--disable-extensions",
      "--disable-network-throttling",
      '--chrome-flags="--incognito --headless --no-sandbox --disable-gpu --disable-dev-shm-usage --disable-storage-reset"',
      "--only-categories=accessibility,best-practices,performance,seo",
      "--quiet",
    ];

    let stdout = "";
    let stderr = "";
    const lighthouse = child_process.spawn(cmd, opts);

    lighthouse.stdout.on("data", (data) => (stdout += data));
    lighthouse.stderr.on("data", (data) => (stderr += data));
    lighthouse.on("close", (status) => {
      const stop = new Date();
      console.log(
        `finished audit at ${stop.toISOString()} with code ${status}`
      );
      console.log(`took ${(stop - start) / 1000} seconds`);

      status !== 0 || stderr.length
        ? reject(stderr)
        : resolve({ status, stdout });
    });
  });
}

function writeStats(data) {
  console.log(`writing stats file`);
  fs.writeFileSync(
    `${__dirname}/../dist/stats.json`,
    typeof data == "string" ? data : JSON.stringify(data),
    "utf8"
  );
}

(async (args) => {
  try {
    const { url } = parseArguments(args);
    const result = await execLighthouse(url);

    if (result.status == 0) {
      writeStats(result.stdout);
    }
  } catch (ex) {
    console.error(ex);
    process.exit(1);
  }
})(Array.from(process.argv).slice(2));
