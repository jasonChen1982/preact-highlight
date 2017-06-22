'use strict';
const { h, Component } = require('preact');
const hljs = require('highlight.js');

class HighLight extends Component {
  parserSyntax() {
    const { code, language } = this.props;
    const codeStr = this.stringify(code);
    const { value } = hljs.highlight(language, codeStr);
    return value;
  }
  stringify(raw) {
    if (typeof raw === 'string') return raw;
    if (typeof raw === 'function') return raw.toString();
    return JSON.stringify(raw, null, '  ');
  }
  render({ language, className }) {
    const codeStr = this.parserSyntax();
    return (
      <div className={className}>
        <pre><code className={`hljs ${language}`}>{codeStr}</code></pre>
      </div>
    );
  }
}
HighLight.defaultProps = {
  language: 'json',
};

module.exports = {
  HighLight,
};
