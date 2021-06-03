const path = require('path');
const allExtensions = ['.ts', '.tsx', '.d.ts', '.js', '.jsx', '.json'];
const packageDir = [
  path.join(__dirname, '.'),
  path.join(__dirname, 'packages/components'),
  path.join(__dirname, 'packages/core'),
];

module.exports = {
  parser: '@typescript-eslint/parser',
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',

    /**
     * 因為有使用 recommended-requiring-type-checking
     * 所以要告知 @typescript-eslint 要使用的 tsconfig 檔
     * 讓它能夠取得正確的 type information
     * */
    project: 'tsconfig.settings.json',
    tsconfigRootDir: __dirname, // monorepo 的話要加上這行，才不會去找到最外層
  },
  extends: [
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
  ],
  rules: {
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: true,
        variables: true,
      },
    ],
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: false,
        classes: true,
        variables: true,
        typedefs: false,
        ignoreTypeReferences: true,
      },
    ],
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'enum',
        format: null,
        custom: {
          regex: '^[A-Z][A-Z0-9]*(__?[A-Z0-9]+)*$',
          match: true,
        },
      },
    ],
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: true,
      },
    ],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['state'],
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        name: 'react',
        importNames: ['default'],
        message: "use import { xxx } from 'react'; instead",
      },
    ],
    'consistent-return': 'off',
    'no-irregular-whitespace': [
      'warn',
      {
        skipStrings: true,
        skipTemplates: true,
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.{js,jsx,ts,tsx}',
          '**/*.stories.{js,jsx,ts,tsx}',
          '**/rollup.config.js',
        ],
        packageDir,
      },
    ],
    'import/prefer-default-export': 'off',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/order': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
  settings: {
    'import/extensions': allExtensions,
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },
    'import/resolver': {
      node: {
        extensions: allExtensions,
      },
    },
  },
};
