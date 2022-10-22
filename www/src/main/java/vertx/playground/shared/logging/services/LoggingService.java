package vertx.playground.www.shared.logging.services;

public class LoggingService {

  public void log(String msg) {
    print("🗒️", msg);
  }

  public void error(String msg) {
    print("❌", msg);
  }

  private void print(String icon, String msg) {
    System.out.println(String.format("""
    %s  %s
    """, icon, msg));
  }
}
