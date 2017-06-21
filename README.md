# preact-highlight
a syntax highlight component for preact
## usage

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

| property          | type                                    | description                              |
| ----------------- | --------------------------------------- | ---------------------------------------- |
| `className`       | `string`                                | css style classname                      |
| `code`            | `string` or `json|object` or `function` | need highlight code snippet              |
