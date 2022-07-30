package com.gfogle.common.services;

import io.vertx.ext.web.Router;
import io.vertx.ext.web.RoutingContext;
import io.vertx.ext.web.common.template.TemplateEngine;
import java.lang.Class;
import java.lang.Object;
import java.lang.reflect.Constructor;
import java.lang.reflect.Method;

public class ReflectionService {

  public static void initRouter(
    String rname,
    Router router,
    TemplateEngine engine
  ) {
    try {
      final Class routerClass = Class.forName(rname);
      final Constructor constructor = routerClass.getConstructor(
        Class.forName("io.vertx.ext.web.Router"),
        Class.forName("io.vertx.ext.web.common.template.TemplateEngine")
      );
      Object instance = constructor.newInstance(router, engine);
    } catch (Exception ex) {
      System.out.println("Error invoking router");
      System.out.println(ex);
    }
  }

  public static void invokeControllerMethod(
    String cname,
    String mname,
    RoutingContext ctx,
    TemplateEngine engine
  ) {
    try {
      final Class controllerClass = Class.forName(cname);
      final Constructor constructor = controllerClass.getConstructor();
      Object instance = constructor.newInstance();
      Method m = controllerClass.getMethod(
        mname,
        new Class[] { RoutingContext.class, TemplateEngine.class }
      );

      m.invoke(instance, ctx, engine);
    } catch (Exception ex) {
      System.out.println("Error invoking controller method");
      System.out.println(ex);
    }
  }
}
