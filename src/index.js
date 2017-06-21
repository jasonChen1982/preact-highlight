'use strict';
const { h, Component } = require('preact');
const hljs = require('highlight.js');

class HighLight extends Component {
  parserSyntax() {
    const { code, language } = this.props;
    const html = hljs.highlight(language, code);
    return html.value;
  }
  render({ language, className }) {
    const __html = this.parserSyntax();
    return (
      <div className={className}>
        <pre><code className={`hljs ${language}`} dangerouslySetInnerHTML={{ __html }}></code></pre>
      </div>
    );
  }
}
HighLight.defaultProps = {
  language: 'json',
};

module.exports = HighLight;
