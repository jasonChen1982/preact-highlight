# preact-highlight

a syntax highlight component for preact, base on awesome [highlight.js](https://github.com/isagalaev/highlight.js)

## features

 - self managed theme style
 - cache highlight result
 - support multi-theme in same application

## usage

use `preact-highlight` with your preact application

```js
const { h, Component } = require('preact');
const { HighLight, THEME } = require('preact-highlight');
const demo = {
  a: 1,
  b: [ 1, 2, 3 ],
};

class CodeArea extends Component {
  render() {
    return <HighLight className="cmp-high-light" code={demo} theme={THEME.monokaiSublime}/>;
  }
}
module.exports = CodeArea;
```

## note

`HighLight` component `code` property had supported `string` or `json` or `object` and `function`

| property          | type                                          | description                              |
| ----------------- | --------------------------------------------- | ---------------------------------------- |
| `className`       | `string`                                      | css style classname                      |
| `code`            | `string` or `json` or `object` and `function` | code snippet which need highlight        |
| `language`        | `string`                                      | use which language syntax                |
| `theme`           | `string`                                      | use which theme                          |
