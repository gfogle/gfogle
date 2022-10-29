package vertx.playground.www.shared.logging.config;

import ch.qos.logback.classic.PatternLayout;
import ch.qos.logback.classic.spi.ILoggingEvent;
import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import vertx.playground.www.shared.logging.helper.MaskingHelper;

/**
  See: https://logback.qos.ch/manual/layouts.html#ClassicPatternLayout
*/
public class MaskingLayout extends PatternLayout {

  private Pattern multilinePattern;
  private final List<String> maskPatterns = new ArrayList<>();
  private final MaskingHelper masker;

  public MaskingLayout() {
    this.masker = new MaskingHelper();
  }

  public void addMaskPattern(String maskPattern) {
    maskPatterns.add(maskPattern);
    multilinePattern =
      Pattern.compile(String.join("|", maskPatterns), Pattern.MULTILINE);
  }

  @Override
  public String doLayout(ILoggingEvent event) {
    String msg = super.doLayout(event);
    Boolean noPatterns = multilinePattern == null || maskPatterns.size() == 0;

    return noPatterns ? msg : apply(msg);
  }

  private String apply(String message) {
    try {
      StringBuilder sb = new StringBuilder(message);
      Matcher matcher = multilinePattern.matcher(sb);
      Boolean foundMatch = matcher.find();

      while (foundMatch) {
        // System.out.println(
        //   String.format(
        //     "Matching on %s at (%d,%d)",
        //     matcher.group(),
        //     matcher.start(),
        //     matcher.end()
        //   )
        // );

        String masked = this.masker.mask(matcher.group());

        sb = sb.replace(matcher.start(), matcher.end(), masked);
        matcher = multilinePattern.matcher(sb);
        foundMatch = matcher.find();
      }

      return sb.toString();
    } catch (Exception ex) {
      System.out.println(String.format("Exception while masking :: %s", ex));

      return message;
    }
  }
}
