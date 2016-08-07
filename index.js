module.exports = {
  "env": {
    "browser": true,
    "mocha": true
  },
  "extends": [
      "./rules/es6",
      "./rules/best_practices"
  ].map(require.resolve)
}
