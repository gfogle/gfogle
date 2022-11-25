
.PHONY: build

build:
	./bin/env && \
	./gradlew build

docker:
	jdeps -q --print-module-deps --ignore-missing-deps www/build/libs/www-all.jar && \
	docker build -f www/Dockerfile -t www:latest ./www && \
	docker run -p 8080:8080 www:latest

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
