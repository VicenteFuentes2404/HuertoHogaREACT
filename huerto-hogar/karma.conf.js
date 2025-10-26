// karma.conf.js
module.exports = function (config) {
  config.set({
    frameworks: ['jasmine', 'webpack'],

    files: [
      'tests/registro.spec.js' // Solo el archivo de prueba es necesario
    ],

    preprocessors: {
      'tests/registro.spec.js': ['webpack'] // Webpack manejará las importaciones
    },

    webpack: require('./webpack.config.js'),

    reporters: ['progress'],
    browsers: ['ChromeHeadless'],
    singleRun: true
  });
};