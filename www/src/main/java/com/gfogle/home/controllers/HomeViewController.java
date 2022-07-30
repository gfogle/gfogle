package com.gfogle.home.controllers;

import io.vertx.ext.web.RoutingContext;
import io.vertx.ext.web.common.template.TemplateEngine;

public class HomeViewController {

  public static void index(RoutingContext ctx, TemplateEngine engine) {
    ctx.put("h1", "Hello, World!");

    engine.render(
      ctx.data(),
      "templates/home/index.html",
      res -> {
        if (res.succeeded()) {
          ctx.response().end(res.result());
        } else {
          System.out.println(
            "Failed to render homepage " + res.cause().getMessage()
          );

          engine.render(
            ctx.data(),
            "templates/error/500.html",
            res2 -> {
              if (res2.succeeded()) {
                ctx.response().end(res2.result());
              }
            }
          );
        }
      }
    );
  }
}
