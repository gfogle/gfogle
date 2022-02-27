/// <reference types="@vertx/core" />
// @ts-check

import { Router } from "@vertx/web";

const app = Router.router(vertx);
const routes = [
  {
    path: "/",
    handler: (ctx) => {
      ctx.response().end("Hello ES4X!");
    },
  },
];

routes.forEach((r) => {
  app.route(r.path).handler(r.handler);
});

try {
  const fs = vertx.fileSystem();
  const data = fs.readDirBlocking("/web/src/plugins");

  console.log(`${data}`);

  //   const data = fs.readDir("plugins").then(
  //     (data) => {
  //       console.log(data);
  //     },
  //     () => {
  //       console.error("error reading for plugins");
  //     }
  //   );
} catch (ex) {
  console.error("error reading plugins");
  console.error(`${ex}`);
}

vertx.createHttpServer().requestHandler(app).listen(3000);

console.log("🚀 server listening on 0.0.0.0:3000!");
