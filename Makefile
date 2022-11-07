
.PHONY: build

build:
	./bin/env && \
	./gradlew build

install:
	sh bin/install

start:
	./bin/env && \
	supervisord -c ./supervisord.conf

stop:
	./gradlew --stop

test:
	./bin/env && \
	./gradlew test --fail-fast check
