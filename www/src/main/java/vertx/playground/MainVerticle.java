package vertx.playground.www;

import io.vertx.core.AbstractVerticle;
import io.vertx.core.Promise;
import vertx.playground.www.shared.logging.services.LoggingService;

public class MainVerticle extends AbstractVerticle {

  @Override
  public void start(Promise<Void> startPromise) throws Exception {
    LoggingService logger = new LoggingService();

    vertx
      .createHttpServer()
      .requestHandler(
        req -> {
          logger.log("Request to www server");

          req
            .response()
            .putHeader("content-type", "text/plain")
            .end("Hello from www !!!");
        }
      )
      .listen(
        8080,
        http -> {
          if (http.succeeded()) {
            startPromise.complete();
            logger.log("HTTP server started on port 8080");
          } else {
            startPromise.fail(http.cause());
          }
        }
      );
  }
}
