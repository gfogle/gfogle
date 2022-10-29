package vertx.playground.www.shared.logging.helper;

public class MaskingHelper {

  private final String MASKED_VAL = "*****";

  public String mask(String msg) {
    try {
      String splitOnChar = msg.contains("=")
        ? "="
        : msg.contains(":") ? ":" : null;
      String[] split = splitOnChar != null
        ? msg.split(splitOnChar)
        : new String[] { msg };

      if (split.length == 1) {
        return MASKED_VAL;
      }

      char firstChar = split[1].charAt(0);

      if (firstChar == '"') {
        return String.format("%s%s\"%s\"", split[0], splitOnChar, MASKED_VAL);
      } else if (firstChar == '\\') {
        return String.format(
          "%s%s\\\"%s\\\"",
          split[0],
          splitOnChar,
          MASKED_VAL
        );
      }

      return MASKED_VAL;
    } catch (Exception ex) {
      return msg;
    }
  }
}
