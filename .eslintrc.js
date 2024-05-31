/* eslint-disable */
module.exports = {
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  globals: { vi: 'readonly' },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vuejs-accessibility/recommended',
    'plugin:security/recommended',
    'prettier',
    '@nuxt/eslint-config',
    'plugin:storybook/recommended',
  ],
  plugins: ['vuejs-accessibility', '@typescript-eslint', 'import', '@stylistic/js'],
  rules: {
    '@stylistic/js/eol-last': ["error", "always"],
    'no-empty': ['error', { 'allowEmptyCatch': true }],
    'no-extra-semi': 0,
    'no-unused-vars': ['error', { args: 'after-used', ignoreRestSiblings: true }],
    // typescript
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-inferrable-types': 0,
    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_', args: 'all', ignoreRestSiblings: true },
    ],
    '@typescript-eslint/ban-types': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-unnecessary-type-constraint': 0,
    '@typescript-eslint/no-this-alias': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/consistent-type-imports': 'error',
    // vue
    'vue/order-in-components': 0,
    'vue/no-multiple-template-root': 0,
    'vue/max-attributes-per-line': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/multiline-html-element-content-newline': 0,
    'vue/html-closing-bracket-newline': 0,
    'vue/require-explicit-emits': 0,
    'vue/multi-word-component-names': 0,
    'vue/no-deprecated-v-bind-sync': 0,
    'vue/html-self-closing': 0,
    'vue/no-deprecated-dollar-listeners-api': 0,
    'vue/no-deprecated-v-on-native-modifier': 0,
    'vue/html-indent': 0,
    'vue/valid-v-slot': 0,
    'vue/v-slot-style': 0,
    'vue/valid-v-bind': 0,
    'vue/no-reserved-component-names': 0,
    'vue/no-useless-template-attributes': 0,
    'vue/require-slots-as-functions': 0,
    'vue/no-mutating-props': 0,
    'vue/no-deprecated-filter': 0,
    'vue/no-v-for-template-key-on-child': 0,
    'vuejs-accessibility/anchor-has-content': 0,
    'vue/no-lone-template': 0,
    'vue/valid-attribute-name': 0,
    'vue/no-deprecated-inline-template': 0,
    'vue/no-unused-components': ['warn'],
    // security
    'security/detect-object-injection': 0,
    // accessibility
    'vuejs-accessibility/no-redundant-roles': 0,
    'vuejs-accessibility/heading-has-content': 0,
    'vuejs-accessibility/no-static-element-interactions': 0,
    'vuejs-accessibility/form-control-has-label': 0,
    'vuejs-accessibility/label-has-for': 0,
    'vuejs-accessibility/mouse-events-have-key-events': 0,
    'vue/html-self-closing': [
      'warn',
      {
        html: {
          void: 'always',
        },
      },
    ],
    'vue/v-on-event-hyphenation': 0,
    'import/order': [
      'warn',
      {
        'newlines-between': 'always-and-inside-groups',
        groups: [
          'builtin',
          'external',
          'internal',
          'unknown',
          'parent',
          'sibling',
          'object',
          'type',
          'index',
        ],
      },
    ],
  },
  overrides: [
    {
      files: ['src/**/*.spec.js', 'config/**/*.spec.js', 'scripts/**/*.js', 'scripts/**/*.ts'],
      rules: {
        'security/detect-unsafe-regex': 0,
        'security/detect-non-literal-regexp': 0,
        'security/detect-child-process': 0,
        'security/detect-non-literal-require': 0,
      },
    },
    {
      files: ['src/**/*.test.ts'],
      rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
      },
    },
    {
      files: ['**/*.ts'],
      rules: {
        'no-unused-vars': 0,
      },
    },
    {
      files: ['src/**/*.js', 'src/**/*.vue', 'src/**/*.ts'],
      rules: {
        '@stylistic/js/quotes':  ['warn', 'single', { 'allowTemplateLiterals': true }],
        '@stylistic/js/semi':  ['warn', 'never'],
      }
    }
  ],
}
