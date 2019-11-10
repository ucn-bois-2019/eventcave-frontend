module.exports = {
  exclude: /node_modules/,
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        modules: false,
        corejs: 3,
        targets: ['last 1 version']
      }
    ]
  ],
  plugins: ['@babel/plugin-transform-runtime']
};
