'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _require = require('preact'),
    h = _require.h,
    Component = _require.Component;

var hljs = require('./lib/hljs');

var _require2 = require('./lib/theme'),
    THEME = _require2.THEME,
    themeManger = _require2.themeManger;

var HighLight = function (_Component) {
  _inherits(HighLight, _Component);

  function HighLight() {
    _classCallCheck(this, HighLight);

    return _possibleConstructorReturn(this, (HighLight.__proto__ || Object.getPrototypeOf(HighLight)).apply(this, arguments));
  }

  _createClass(HighLight, [{
    key: 'parserSyntax',
    value: function parserSyntax() {
      var _props = this.props,
          code = _props.code,
          language = _props.language;

      var codeStr = this.stringify(code);
      return hljs(codeStr, language);
    }
  }, {
    key: 'stringify',
    value: function stringify(raw) {
      if (typeof raw === 'string') return raw;
      if (typeof raw === 'function') return raw.toString();
      return JSON.stringify(raw, null, '  ');
    }
  }, {
    key: 'updateTheme',
    value: function updateTheme(theme) {
      if (theme !== this.theme) {
        this.theme = theme;
        themeManger(theme);
      }
    }
  }, {
    key: 'render',
    value: function render(_ref) {
      var language = _ref.language,
          className = _ref.className,
          theme = _ref.theme;

      var codeStr = this.parserSyntax();
      this.updateTheme(theme);
      return h(
        'div',
        { className: className + ' ' + theme },
        h(
          'pre',
          null,
          h(
            'code',
            { className: 'hljs ' + language },
            codeStr
          )
        )
      );
    }
  }]);

  return HighLight;
}(Component);

HighLight.defaultProps = {
  language: 'json',
  theme: THEME.monokaiSublime
};

module.exports = {
  THEME: THEME,
  HighLight: HighLight
};