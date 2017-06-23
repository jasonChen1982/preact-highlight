'use strict';

var isBrowser = require('./isBrowser');

var _require = require('./config'),
    THEME = _require.THEME,
    version = _require.version;

var utils = require('./utils');
var CACHE_STYLES = {};

function themeManger(theme) {
  if (!THEME[theme] || !isBrowser) return;
  var doc = document;
  var headDoc = doc.head;
  if (!CACHE_STYLES[theme]) {
    var link = doc.createElement('link');
    var url = utils.cdn(version, THEME[theme]);
    link.setAttribute('href', url);
    link.setAttribute('rel', 'stylesheet');
    CACHE_STYLES[theme] = true;
    headDoc.appendChild(link);
    console.log(url);
  }
}

module.exports = {
  THEME: THEME,
  themeManger: themeManger
};