FROM ghcr.io/graalvm/graalvm-ce:ol8-java17-22.0.0.2

RUN gu install nodejs

WORKDIR /web

COPY src src/
COPY docker/package.json package.json

RUN npm install && ./node_modules/.bin/es4x install

CMD ["./node_modules/.bin/es4x"]
