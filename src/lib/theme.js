'use strict';

const isBrowser = require('./isBrowser');
const { THEME, version } = require('./config');
const utils = require('./utils');
const CACHE_STYLES = {};

function themeManger(theme) {
  if (!theme || !isBrowser) return;
  const doc = document;
  const headDoc = doc.head;
  if (!CACHE_STYLES[theme]) {
    const link = doc.createElement('link');
    const url = utils.cdn(version, theme);
    link.setAttribute('href', url);
    link.setAttribute('rel', 'stylesheet');
    CACHE_STYLES[theme] = true;
    headDoc.appendChild(link);
  }
}

module.exports = {
  THEME,
  themeManger,
};
