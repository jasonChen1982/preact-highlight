'use strict';

const { h, Component } = require('preact');
const hljs = require('./lib/hljs');
const { THEME, themeManger } = require('./lib/theme');

class HighLight extends Component {
  parserSyntax() {
    const { code, language } = this.props;
    const codeStr = this.stringify(code);
    return hljs(codeStr, language);
  }
  stringify(raw) {
    if (typeof raw === 'string') return raw;
    if (typeof raw === 'function') return raw.toString();
    return JSON.stringify(raw, null, '  ');
  }
  updateTheme(theme) {
    if (theme !== this.theme) {
      this.theme = theme;
      themeManger(theme);
    }
  }
  render({ language, className, theme }) {
    const codeStr = this.parserSyntax();
    this.updateTheme(theme);
    return (
      <div className={`${className} ${theme}`}>
        <pre><code className={`hljs ${language}`}>{codeStr}</code></pre>
      </div>
    );
  }
}
HighLight.defaultProps = {
  language: 'json',
  theme: THEME.monokaiSublime,
};

module.exports = {
  THEME,
  HighLight,
};
