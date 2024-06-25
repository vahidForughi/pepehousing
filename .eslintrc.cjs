/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
    env: {
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/essential',
        '@vue/eslint-config-typescript'
    ]
}
