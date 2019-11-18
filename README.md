# eslint-config-neworbit

ESLint configuration for NewOrbit

## Installation
`npm install eslint eslint-config-neworbit --save-dev`

## Setup

Add `.eslintrc.json` file with the following contents:

```json
{
    "extends": [
        "neworbit"
    ]
}
```

Setup a lint script in your `package.json` something like this:
```json
{
    ...
    "scripts": {
        ...
        "lint:typescript": "eslint \"./**/*.{ts,tsx}\""
    }
}
```

## VS Code setup

- Install the ESLint extension for VS Code
- Make sure you have TypeScript files included in your settings:

    ```json
        "eslint.validate": [
            "javascript",
            "javascriptreact",
            "typescript",
            "typescriptreact"
        ]
    ```

- If your `package.json` and `.eslintrc.json` files aren't in the root directory you open in VS Code you may need to add working directories in your workspace settings:

```json
{
    ...
    "settings": {
        ...
        "eslint.workingDirectories": [
            {
                "directory": "{FOLDER_THAT_CONTAINS_CONFIG}"
            }
        ],
    }
}
```

## Migrating from TSLint

For mapping TSLint rule overrides in your own project to the equivalent ESLint rules please refer to the [map](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/ROADMAP.md). If you cannot find the rule simply Google it as ESLint is plugin based and there is likely a plugin offering the required functionality.

## License

Made with :sparkling_heart: by [NewOrbit](https://www.neworbit.co.uk/) in Oxfordshire, and licensed under the [MIT Licence](LICENCE)
