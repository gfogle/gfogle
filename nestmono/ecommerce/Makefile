
build:
	rm -rf dist && \
	mkdir dist && mkdir dist/public && \
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
	./node_modules/.bin/htmlhint -c ./.htmlhintrc ./src/modules/**/views/**/*.ejs && \
	./node_modules/.bin/eslint --ext ts,tsx,js,jsx ./src


# TODO: add watch ability for local dev
# TODO: node dist/main if NODE_ENV is production
start:
	node bin/start --dev

test:
	# Lint files first to avoid bad compiles, wasted cycles etc.
	make lint && \
	make test_unit && \
	make test_e2e

test_e2e:
	./node_modules/.bin/jest --config ./config/jest.e2e.json

test_unit:
	./node_modules/.bin/jest --config ./config/jest.unit.json
