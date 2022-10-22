
.PHONY: build

build:
	./gradlew build

install:
	sh bin/install

start:
	./gradlew --parallel :www:vertxRun
