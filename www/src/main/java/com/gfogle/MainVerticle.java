package com.gfogle;

import com.gfogle.common.services.ReflectionService;
import io.vertx.core.AbstractVerticle;
import io.vertx.core.Promise;
import io.vertx.ext.web.Router;
import io.vertx.ext.web.RoutingContext;
import io.vertx.ext.web.common.template.TemplateEngine;
import io.vertx.ext.web.templ.handlebars.HandlebarsTemplateEngine;
import java.lang.Class;
import java.lang.Object;
import java.lang.reflect.Constructor;
import java.lang.reflect.Method;

public class MainVerticle extends AbstractVerticle {

  @Override
  public void start(Promise<Void> startPromise) throws Exception {
    TemplateEngine engine = HandlebarsTemplateEngine.create(vertx, "html");
    Router router = Router.router(vertx);

    ReflectionService.initRouter("com.gfogle.home.HomeRouter", router, engine);

    vertx
      .createHttpServer()
      .requestHandler(router)
      .listen(
        3000,
        http -> {
          if (http.succeeded()) {
            startPromise.complete();
            System.out.println("HTTP server started on port 3000");
          } else {
            startPromise.fail(http.cause());
          }
        }
      );
  }
}
