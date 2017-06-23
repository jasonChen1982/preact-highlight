'use strict';

const isBrowser = require('./isBrowser');
const hljs = require('highlight.js');
const md5 = require('./md5');

const CACHE = {};

function generateKey(language, unique) {
  return `m${language}${unique}`;
}

module.exports = function(codeStr, language) {
  const key = generateKey(language, md5(codeStr));
  if (!isBrowser) {
    return hljs.highlight(language, codeStr).value;
  }
  if (!CACHE[key]) CACHE[key] = hljs.highlight(language, codeStr).value;
  return CACHE[key];
};
