
build:
	./node_modules/.bin/rimraf dist && \
	./node_modules/.bin/nest build && \
	node bin/copyviews && \
	make bundle

# TODO: autoload all the dependencies
# TODO: watch mode
bundle:
	node bin/bundle

install:
	npm install

lint:
	./node_modules/.bin/eslint ./src/**/*.ts

# TODO: add watch ability for local dev
# TODO: node dist/main if NODE_ENV is production
start:
	./node_modules/.bin/nest start

test:
	# Lint files first to avoid bad compiles, wasted cycles etc.
	make lint && \
	make test_unit && \
	make test_e2e

test_e2e:
	./node_modules/.bin/jest --config ./config/e2e.json

test_unit:
	./node_modules/.bin/jest --config ./config/unit.json
