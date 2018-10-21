module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactSimpleMonthPicker',
      externals: {
        react: 'React'
      }
    }
  }
}
