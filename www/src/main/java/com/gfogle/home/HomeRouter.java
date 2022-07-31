package com.gfogle.home;

import com.gfogle.common.services.LoggingService;
import com.gfogle.common.services.ReflectionService;
import io.vertx.ext.web.Router;
import io.vertx.ext.web.RoutingContext;
import io.vertx.ext.web.common.template.TemplateEngine;
import java.lang.Class;
import java.lang.Object;
import java.lang.reflect.Constructor;
import java.lang.reflect.Method;

public class HomeRouter {

  public HomeRouter(Router router, TemplateEngine engine) {
    LoggingService.log("HomeRouter constructor");

    router
      .get("/")
      .handler(
        ctx -> {
          ReflectionService.invokeControllerMethod(
            "com.gfogle.home.controllers.HomeViewController",
            "index",
            ctx,
            engine
          );
        }
      );
  }
}
