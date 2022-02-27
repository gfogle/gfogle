module.exports = [
  {
    path: "/health",
    handler: (ctx) => {
      ctx.response().setStatusCode(200).end();
    },
  },
];
