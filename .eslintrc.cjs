/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-prettier',
  ],
  env: {
    'vue/setup-compiler-macros': true,
  },
  rules: {
    'no-prototype-builtins': 'off',
    'linebreak-style': ['error', 'windows'],
    'vue/require-default-prop': 'off',
    semi: ['error', 'never'],
    'global-require': 'off',
    // 'arrow-parens': ['error', 'as-needed'], // скобки в стрелочной функции.
    'no-plusplus': 'off', // запрещает унарные операторы ++и --
    'constructor-super': 'off', // конструкторы производных классов должны вызывать super(). Конструкторы не производных классов не должны вызывать super().
    'no-mixed-operators': [
      // Заключение сложных выражений в круглые скобки проясняет замысел разработчика
      'error',
      {
        groups: [
          ['+', '-', '*', '/', '%', '**'],
          ['&', '|', '^', '~', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof'],
        ],
        allowSamePrecedence: true,
      },
    ],
    'import/extensions': 'off', // обеспечить согласованное использование расширения файла в пути импорта
    'import/prefer-default-export': 'off', // ESLint предпочитает экспорт по умолчанию импорт/предпочитает экспорт по умолчанию
    'no-param-reassign': 'off', // без переназначения параметров
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: { multiline: true, consistent: true },
        ObjectPattern: { multiline: true, consistent: true },
      },
    ],

    'prettier/prettier': [
      'error',
      {
        tabWidth: 2,
        singleQuote: true,
        printWidth: 80,
        bracketSpacing: true,
        semi: false,
        trailingComma: 'all',
        endOfLine: 'auto',
        useTabs: false,
      },
    ],
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  parser: 'vue-eslint-parser',
}
