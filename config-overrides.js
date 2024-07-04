const { override, addDecoratorsLegacy, disableEsLint, addBabelPlugins } = require('customize-cra');

// Remove this line as it's not working as intended
// process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = override(
  addDecoratorsLegacy(),
  disableEsLint(),
  ...addBabelPlugins(
    ["@babel/plugin-proposal-class-properties", { "loose": true }]
  )
);