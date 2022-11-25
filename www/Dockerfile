FROM ghcr.io/graalvm/jdk:ol9-java17-22.3.0 as jre

RUN jlink \
    --add-modules \
      java.base,java.compiler,java.desktop,java.naming,java.scripting,java.sql,jdk.unsupported,org.graalvm.sdk,jdk.naming.dns \
    --verbose \
    --strip-java-debug-attributes \
    --compress 2 \
    --no-header-files \
    --no-man-pages \
    --output /opt/java/jdk

FROM panga/alpine:3.8-glibc2.27

COPY --from=jre /opt/java/jdk /opt/java/jdk

WORKDIR /www

COPY ./build/libs/www-all.jar .

CMD ["/opt/java/jdk/bin/java", "-jar", "www-all.jar"]
