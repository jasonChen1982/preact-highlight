'use strict';

module.exports = {
  cdn(version, style) {
    return `//unpkg.com/preact-highlight@${version}/build/styles/${style}.css`;
  },
};
