import antfu from '@antfu/eslint-config';

export default antfu({
  ignores: [
    'dist',
    'node_modules',
  ],
  stylistic: {
    indent: 2,
    quotes: 'single',
    semi: true,
  },
  rules: {
    /** ARRAY */
    'array-bracket-newline': [
      'error',
      {
        minItems: 1,
      },
    ],
    'array-element-newline': [
      'error',
      {
        minItems: 1,
      },
    ],
    /** END ARRAY */

    /** OBJECT */
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          minProperties: 1,
        },
      },
    ],
    'object-curly-spacing': [
      'error',
      'always',
    ],
    'object-property-newline': [
      'error',
      {
        allowAllPropertiesOnSameLine: false,
      },
    ],
    /** END OBJECT */

    /** VUE */
    'vue/block-order': [
      'error',
      {
        order: [
          'script',
          'template',
          'style',
        ],
      },
    ],
    'vue/component-name-in-template-casing': [
      'error',
      'kebab-case',
    ],
    'vue/padding-line-between-tags': [
      'error',
    ],
    'vue/first-attribute-linebreak': [
      'error',
      {
        singleline: 'beside',
        multiline: 'below',
      },
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 1,
        },
        multiline: {
          max: 1,
        },
      },
    ],
    'vue/multiline-html-element-content-newline': [
      'error',
      {
        ignoreWhenEmpty: true,
        allowEmptyLines: false,
      },
    ],
    'vue/singleline-html-element-content-newline': [
      'error',
      {
        ignoreWhenEmpty: true,
      },
    ],
  },
  /** END VUE */
});
