'use strict';

module.exports = {
  cdn: function cdn(version, style) {
    return '//unpkg.com/preact-highlight@' + version + '/build/styles/' + style + '.css';
  }
};