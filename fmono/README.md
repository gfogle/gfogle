# 🦁  fmono
This is a monolithic fastify webserver that can serve html and json.

## 🗒  Documentation
The api uses [apidoc](https://github.com/apidoc/apidoc) to codegen the documentation. You can run `npm run docs` to generate those docs and they will get written out into the `public/apidoc` folder with an `index.html` you can use to browse. The source code is annotated with [jsdoc]() syntax and will be written to the `public/jsdoc` folder with an `index.html` file.

## 🧪  Testing
The project uses a few libraries to test and generally tries to follow a BDD test naming convention based on [Gherkin](https://cucumber.io/docs/gherkin/reference/). When testing, you can run `npm test` and a report with code coverage will be created on your local file system at `test/coverage/index.html` in this project directory.

### Types of Tests

- **unit tests** these take a _subject_ under test and uses dependency injection to make sure that all immediate dependencies are mocked out

- **integration tests** these only mock _external_ dependencies such as network calls, the file system etc. but leave all other code untouched

- **system tests** these are intended to be run against a fully working system with no mocking

### Libraries
These are the short list of libraries we use to write tests.

- **[rosie](https://github.com/rosiejs/rosie)** we use this to create fixtures. fixtures are factory functions that return different mock data shapes.
- **[lab](https://github.com/hapijs/lab)** lab is our test runner. originally built for `hapi` but is a lightweight runner that doesn't pollute the global space like other runners re: Jest.
- **[code](https://github.com/hapijs/code)** an assertion library with the same API as `chai` built to pair with Lab.
- **[testdouble](https://github.com/testdouble/testdouble.js/)** test double is similar to `Sinon` and used for mocking and stubbing

### 🌐  Useful Links

- https://blog.testdouble.com/posts/2016-03-13-testdouble-vs-sinon/
- https://www.youtube.com/watch?v=x8sKpJwq6lY
