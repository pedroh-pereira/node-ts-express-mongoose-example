module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@configs': './src/configs',
        '@controllers': './src/controllers',
        '@models': './src/models',
        '@repositories': './src/repositories',
        '@services': './src/services',
        '~': './src'
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}