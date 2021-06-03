module.exports = {
  extends: '../../.eslintrc.js',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname, // monorepo 的話要加上這行，才不會去找到最外層
  },
};
