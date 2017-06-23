'use strict';

var isBrowser = require('./isBrowser');

var _require = require('./config'),
    THEME = _require.THEME,
    version = _require.version;

var utils = require('./utils');
var CACHE_STYLES = {};

function themeManger(theme) {
  if (!THEME[theme]) return;
  if (!CACHE_STYLES[theme] && isBrowser) {
    CACHE_STYLES[theme] = '';
    console.log(utils.cdn(version, THEME[theme]));
  }
}

module.exports = {
  THEME: THEME,
  themeManger: themeManger
};