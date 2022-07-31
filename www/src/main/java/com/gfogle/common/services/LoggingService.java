package com.gfogle.common.services;

public class LoggingService {

  public static void log(String msg) {
    System.out.println("🗒️ " + msg + "\n");
  }

  public static void error(String msg) {
    System.out.println("❌ " + msg + "\n");
  }
}
