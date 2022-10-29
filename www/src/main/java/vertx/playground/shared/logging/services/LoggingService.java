package vertx.playground.www.shared.logging.services;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LoggingService {

  private static final String APP_KEY = "app_name";
  private static final String APP_VAL = "www";
  private static final String TIMESTAMP_KEY = "ts";
  private static final SimpleDateFormat TIMESTAMP_FMT = new SimpleDateFormat(
    "yyyy-MM-dd'T'HH:mm:ss.SSSXXX"
  );

  private static final Logger logger = LoggerFactory.getLogger(
    LoggingService.class
  );

  public static void log(String msg) {
    Map<String, String> map = new HashMap<>();
    map.put(APP_KEY, APP_VAL);

    try {
      map.put(
        TIMESTAMP_KEY,
        TIMESTAMP_FMT.format(new Timestamp((new Date()).getTime()))
      );
    } catch (Exception ex) {
      System.out.println(ex.getMessage());
    }
    map.put("msg", msg);

    logger.info(new JSONObject(map).toString());
  }

  public static void error(String msg) {
    logger.error(String.format("%s  %s", "❌", msg));
  }
}
