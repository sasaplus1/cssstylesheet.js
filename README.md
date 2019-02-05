# cssstylesheet.js

[![Build Status](https://travis-ci.org/sasaplus1/cssstylesheet.js.svg)](https://travis-ci.org/sasaplus1/cssstylesheet.js)
[![npm version](https://badge.fury.io/js/cssstylesheet.svg)](http://badge.fury.io/js/cssstylesheet)
[![renovate](https://badges.renovateapi.com/github/sasaplus1/cssstylesheet.js)](https://renovatebot.com)

cross browser [CSSStyleSheet](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet)

## Installation

```sh
$ npm install cssstylesheet
```

## Usage

```html
<script src="cssstylesheet.min.js"></script>
```

### Example

```js
const sheet = cssstylesheet.create();  // or sheet = new cssstylesheet();

// add css rule
sheet.addRule('body', 'background-color: #ccccff;');

// remove all
sheet.clearRule();
```

## Functions

### cssstylesheet

cssstylesheet constructor.

### cssstylesheet#insertRule(selector, ruleText, index)

- `selector`
  - `String`
- `ruleText`
  - `String`
- `index`
  - `Number`

insert rule at index.

### cssstylesheet#deleteRule(index)

- `index`
  - `Number`

delete rule of index.

### cssstylesheet#addRule(selector, ruleText)

- `selector`
  - `String`
- `ruleText`
  - `String`

add rule at last.

### cssstylesheet#clearRule()

delete all rule.

### cssstylesheet#getElement()

return HTMLStyleElement, but return null if browser is old IE.

### cssstylesheet#getSheet()

return CSSStyleSheet.

### cssstylesheet#getRules()

return CSSRuleList.

### cssstylesheet.create()

create cssstylesheet instance.

## License

The MIT license.
