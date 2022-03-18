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
        '@configs/*': './configs/*',
        '@controllers/*': './controllers/*',
        '@models/*': './models/*',
        '@repositories/*': './repositories/*',
        '@services/*': './services/*',
        '~/*': './*'
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}