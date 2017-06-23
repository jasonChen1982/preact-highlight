'use strict';

const path = require('path');
const fs = require('fs');
const cwd = process.cwd();
const stylus = require('stylus');
const mkdirp = require('mkdirp');
const camelcase = require('camelcase');
const pkg = require('../package.json');
const stylesPath = path.resolve('node_modules/highlight.js', 'styles');
const stylesFiles = fs.readdirSync(stylesPath, 'utf8').filter(it => {
  return /\.css/.test(it);
});
const targetDir = path.resolve(cwd, 'build/styles');
const libDir = path.resolve(cwd, 'build/lib');
mkdirp.sync(targetDir);
mkdirp.sync(libDir);

function wrapTheme(styleName, style) {
  return `
.${styleName} {
${style}
}
`;
}
function wrapConfig(keyWord, version) {
  return `
'use strict';

module.exports = {
  THEME: ${JSON.stringify(keyWord, null, '  ')},
  version: '${version}',
};

`;
}

function generateTheme(styleName, filePath, targetPath) {
  return new Promise((res, rej) => {
    try {
      const style = fs.readFileSync(filePath, 'utf8');
      stylus(wrapTheme(styleName, style))
        .set('filename', 'nesting.css')
        .render(function(err, css) {
          fs.writeFileSync(targetPath, css);
          res(styleName);
        });
    } catch (error) {
      rej(error);
    }
  });
}

function putConfig(stylesMap) {
  return new Promise((res, rej) => {
    try {
      const constants = {};
      stylesMap.forEach(({ theme, styleName }) => {
        constants[theme] = styleName;
      });
      fs.writeFileSync(path.resolve(libDir, 'config.js'), wrapConfig(constants, pkg.version));
    } catch (error) {
      rej(error);
    }
  });
}

function putThemes() {
  const normalizeName = stylesFiles.map(style => {
    const styleName = style.replace('.css', '');
    const theme = camelcase(styleName);
    const filePath = path.resolve(stylesPath, style);
    const targetPath = path.resolve(targetDir, style);
    return {
      theme,
      styleName,
      filePath,
      targetPath,
    };
  });
  const queue = normalizeName.map(({ styleName, filePath, targetPath }) => {
    return generateTheme(styleName, filePath, targetPath);
  });
  queue.push(putConfig(normalizeName));
  return Promise.all(queue);
}
putThemes();
