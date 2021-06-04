module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: '14',
        },
      },
    ],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'babel-plugin-styled-components',
      {
        ssr: true,
        pure: true, // NOTICE: this is for dead code elimination
      },
    ],
    '@babel/plugin-transform-runtime',
  ],
};
