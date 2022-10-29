package vertx.playground.www;

import io.vertx.core.AbstractVerticle;
import io.vertx.core.Promise;
import io.vertx.core.logging.SLF4JLogDelegateFactory;
import java.util.HashMap;
import java.util.Map;
import org.json.JSONObject;
import vertx.playground.www.shared.logging.services.LoggingService;

public class MainVerticle extends AbstractVerticle {

  public MainVerticle() {
    System.setProperty(
      "org.vertx.logger-delegate-factory-class-name",
      SLF4JLogDelegateFactory.class.getName()
    );
  }

  @Override
  public void start(Promise<Void> startPromise) throws Exception {
    vertx
      .createHttpServer()
      .requestHandler(
        req -> {
          LoggingService.log("Request to www server");

          Map<String, String> user = new HashMap<>();
          user.put("user_id", "97588");
          user.put("email", "random@email.com");

          LoggingService.log(new JSONObject(user).toString());

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
            LoggingService.log("HTTP server started on port 8080");

            startPromise.complete();
          } else {
            LoggingService.error("Failed to start server on port 8080");
            startPromise.fail(http.cause());
          }
        }
      );
  }
}
