
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/number-add.min.js');
} else {
  module.exports = require('./dist/number-add.js');
}