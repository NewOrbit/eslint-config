# eslint-config-neworbit
ESLint configuration for NewOrbit

## Installation
`npm install eslint eslint-config-neworbit --save-dev`

## Setup
Add `eslint.config.js` or extend existing one. Documentation: [Eslint documentation](https://eslint.org/docs/latest/use/getting-started#configuration)
```js
// @ts-check
import NewOrbitEslintConfig from "eslint-config-neworbit";

export default [
    ...NewOrbitEslintConfig,
    /* rest of your config, e.g.:
    {
        plugins: {
            "react-refresh": ReactRefreshPlugin,
        },
        rules: {
            "react-refresh/only-export-components": "warn",
        },
    },
    */
];
```

You are ready to use it from [eslint CLI](https://eslint.org/docs/latest/use/command-line-interface), by e.g. adding a script to your `package.json`
```json
{
    ...
    "scripts": {
        ...
        "lint:ts": "eslint --max-warnings 0 -c eslint.config.js \"./**/*.{js,jsx,ts,tsx, mjs, mts, mjsx, mtsx}\"",
    }
}
```
Or you can use it from VS Code by downloading [Microsoft ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## License
Made with :sparkling_heart: by [NewOrbit](https://www.neworbit.co.uk/) in Oxfordshire, and licensed under the [MIT Licence](LICENCE).
