const ping  = require('./ping');
const crud = require('./crud');

module.exports = [
  ping,
  ...crud
];