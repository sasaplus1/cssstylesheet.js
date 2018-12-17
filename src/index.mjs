// NOTE: getElementsByTagName returns HTMLCollection(or NodeList) every time
const head = document.getElementsByTagName('head')[0];

const cssss = window.CSSStyleSheet;

const cssRulesName = 'cssRules' in cssss.prototype ? 'cssRules' : 'rules';
const cssDeleteRuleName =
  'deleteRule' in cssss.prototype ? 'deleteRule' : 'removeRule';

const CSSStyleSheet =
  'createStyleSheet' in document
    ? /**
       * constructor for old IE
       *
       * @constructor
       */
      function CSSStyleSheet() {
        this._element = null;
        this._sheet = document.createStyleSheet();
      }
    : /**
       * constructor for modern browsers
       *
       * @constructor
       */
      function CSSStyleSheet() {
        this._element = document.createElement('style');

        // NOTE: for WebKit
        this._element.appendChild(document.createTextNode(''));

        head.appendChild(this._element);

        this._sheet = this._element.sheet;
      };

export default CSSStyleSheet;

CSSStyleSheet.prototype.insertRule =
  'insertRule' in cssss.prototype
    ? /**
       * insert rule for modern browsers
       *
       * @param {String} selector
       * @param {String} ruleText
       * @param {Number} index
       * @return {Number}
       */
      function insertRule(selector, ruleText, index) {
        return this._sheet.insertRule(selector + '{' + ruleText + '}', index);
      }
    : /**
       * insert rule for old IE
       *
       * @param {String} selector
       * @param {String} ruleText
       * @param {Number} index
       * @return {Number}
       */
      function insertRule(selector, ruleText, index) {
        return this._sheet.addRule(selector, ruleText, index);
      };

/**
 * delete rule for modern browsers
 *
 * @return {Undefined}
 */
CSSStyleSheet.prototype.deleteRule = function deleteRule(index) {
  return this._sheet[cssDeleteRuleName](index);
};

/**
 * insert rule at last
 *
 * @param {String} selector
 * @param {String} ruleText
 * @return {Number}
 */
CSSStyleSheet.prototype.addRule = function addRule(selector, ruleText) {
  const length = this._sheet[cssRulesName].length;

  return this.insertRule(selector, ruleText, length);
};

/**
 * delete all rule
 */
CSSStyleSheet.prototype.clearRule = function clearRule() {
  let i = this._sheet[cssRulesName].length;

  while (i--) {
    this.deleteRule(i);
  }
};

/**
 * get style element
 *
 * @return {Null|HTMLStyleElement}
 */
CSSStyleSheet.prototype.getElement = function getElement() {
  return this._element;
};

/**
 * get CSSStyleSheet
 *
 * @return {CSSStyleSheet}
 */
CSSStyleSheet.prototype.getSheet = function getSheet() {
  return this._sheet;
};

/**
 * get rules
 *
 * @return {CSSRuleList}
 */
CSSStyleSheet.prototype.getRules = function getRules() {
  return this._sheet[cssRulesName];
};

/**
 * create CSSStyleSheet instance
 *
 * @return {CSSStyleSheet}
 */
CSSStyleSheet.create = function create() {
  return new CSSStyleSheet();
};
