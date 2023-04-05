module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [ "plugin:react/recommended", "plugin:react/jsx-runtime", "standard"
    ],
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: [
        "react"
    ],
    rules: {
    }
}