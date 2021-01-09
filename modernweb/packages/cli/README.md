# CLI
This is the code for the Command Line Interface (CLI) that users interact with while scaffolding projects, creating controllers and models etc.

The code follows two design patterns: [Interpreter](https://www.oodesign.com/interpreter-pattern.html) for taking user input _expressions_, generating a _context_ object with that input mapped to an output [Command](https://www.oodesign.com/command-pattern.html) which executes on that context.

## Development
The project source code leverages Typescript's type-checking via [comments](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html); it does not use `.ts` files.

Why? Well, because I want to write Javascript. I don't want to transpile code, emit source maps and run ts-node when I just want TS to be my linter.

Why not use ESLint? Good question. Too many dependencies and too many "rules" to manage. I just want some sane defaults out of the box and get back to solving real problems.
