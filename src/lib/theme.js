'use strict';

const isBrowser = require('./isBrowser');
const version = require('./version');
const THEME = require('./constants');
const utils = require('./utils');
const CACHE_STYLES = {};

function themeManger(theme) {
  if (!THEME[theme]) return;
  if (!CACHE_STYLES[theme] && isBrowser) {
    CACHE_STYLES[theme] = '';
    console.log(utils.cdn(version, THEME[theme]));
  }
}

module.exports = {
  THEME,
  themeManger,
};
