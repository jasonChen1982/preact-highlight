'use strict';

var THEME = require('./constants.json');

function themeManger(theme) {
  console.log(theme);
}

module.exports = {
  THEME: THEME,
  themeManger: themeManger
};