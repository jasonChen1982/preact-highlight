# preact-highlight

a syntax highlight component for preact

## usage

#### step.1

link theme stylesheets

```html
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/default.min.css">
```

#### step.2

use it with your preact application

```js
const { h, Component } = require('preact');
const HighLight = require('preact-highlight');
const demo = {
  a: 1,
  b: [ 1, 2, 3 ],
};

class CodeArea extends Component {
  render() {
    return <HighLight className="cmp-high-light" code={demo}/>;
  }
}
module.exports = CodeArea;
```

## note

`HighLight` component `code` property had supported `string` `json|object` `function`

| property          | type                                          | description                              |
| ----------------- | --------------------------------------------- | ---------------------------------------- |
| `className`       | `string`                                      | css style classname                      |
| `code`            | `string` or `json` or `object` and `function` | code snippet which need highlight        |
| `language`        | `string`                                      | use which language                       |
| `theme`           | `string`                                      | use which theme                          |
