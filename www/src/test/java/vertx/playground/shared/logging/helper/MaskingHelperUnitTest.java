package vertx.playground.www.shared.logging.helper.test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.mock;

import org.junit.jupiter.api.Test;
import vertx.playground.www.shared.logging.helper.MaskingHelper;

public class MaskingHelperUnitTest {

  private String[][] matchers = new String[][] {
    new String[] { "*****", "random@email.com" },
    new String[] { "\"email\":\"*****\"", "\"email\":\"random@email.com\"" },
    new String[] { "\"email\"=\"*****\"", "\"email\"=\"random@email.com\"" },
  };

  @Test
  void matchesAllPatterns() {
    var subject = new MaskingHelper();
    int counter = 0;

    for (var match : matchers) {
      assertEquals(match[0], subject.mask(match[1]));
      counter++;
    }

    assertEquals(counter, matchers.length);
  }
}
