const { html, Component } = require("htm/preact");
const renderToString = require("preact-render-to-string");

class App extends Component {
  render(props) {
    return html`
      <div class="app">
        <h1>This is server-side generated content</h1>
        <p>Current server time: ${new Date() + ""}</p>
      </div>
    `;
  }
}

class SSRController {
  /**
   *
   * @param {import("fastify").FastifyRequest} request
   * @param {import("fastify").FastifyReply} reply
   */
  index(request, reply) {
    reply.statusCode = 200;
    reply.view(`plugins/ssr/views/index.ejs`, {
      title: "FMono | Fastify Monorepo",
      description: "Server-Side Generated content for FMono",
      embedded: renderToString(html`<${App} url=${request.url} />`),
    });
  }
}

module.exports.SSRController = SSRController;
