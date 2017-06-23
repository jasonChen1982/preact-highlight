'use strict';

var isBrowser = require('./isBrowser');
var hljs = require('highlight.js');
var md5 = require('./md5');

var CACHE = {};

function generateKey(language, unique) {
  return 'm' + language + unique;
}

module.exports = function (codeStr, language) {
  var key = generateKey(language, md5(codeStr));
  if (!isBrowser) {
    return hljs.highlight(language, codeStr).value;
  }
  if (!CACHE[key]) CACHE[key] = hljs.highlight(language, codeStr).value;
  return CACHE[key];
};