# eslint-config-neworbit
ESLint configuration for NewOrbit

## Installation

```sh
# npm
npm install eslint eslint-config-neworbit --save-dev

# pnpm
pnpm add -D eslint eslint-config-neworbit
```

This package requires the following peer dependencies. Your package manager will install them automatically, but you can pin specific versions if needed:

```sh
pnpm add -D typescript-eslint eslint-plugin-import eslint-plugin-jsdoc eslint-plugin-promise
```

For React projects, also add:

```sh
pnpm add -D eslint-plugin-react eslint-plugin-react-hooks
```

## Setup

### React projects (default export — same as v11)

Add `eslint.config.js` or extend an existing one:

```js
// @ts-check
import neworbit from "eslint-config-neworbit";

export default [
    ...neworbit,
    /* rest of your config */
];
```

### Non-React TypeScript projects

Use the named `base` export — React plugins are not required:

```js
// @ts-check
import { base } from "eslint-config-neworbit";

export default [
    ...base,
    /* rest of your config */
];
```

### Explicit React composition

```js
// @ts-check
import { base, react } from "eslint-config-neworbit";

export default [
    ...base,
    ...react,
    /* rest of your config */
];
```

## Prettier

This config enforces formatting rules directly. If you use Prettier, add [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier) **last** to disable the rules that Prettier owns:

```sh
pnpm add -D eslint-config-prettier
```

```js
// @ts-check
import neworbit from "eslint-config-neworbit";
import prettier from "eslint-config-prettier";

export default [
    ...neworbit,
    // ...your project-specific config...
    prettier, // must be last
];
```

## Usage

You can run ESLint from the [CLI](https://eslint.org/docs/latest/use/command-line-interface), for example by adding a script to your `package.json`:

```json
{
    "scripts": {
        "lint:ts": "eslint --max-warnings 0 -c eslint.config.js \"./**/*.{js,jsx,ts,tsx,mjs,mts,mjsx,mtsx}\""
    }
}
```

Or use it from VS Code by installing the [Microsoft ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

## License
Made with :sparkling_heart: by [NewOrbit](https://www.neworbit.co.uk/) in Oxfordshire, and licensed under the [MIT Licence](LICENCE).
