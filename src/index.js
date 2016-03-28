'use strict';

var head = document.getElementsByTagName('head')[0],
    cssss = window.CSSStyleSheet;

var cssRulesName =
  ('cssRules' in window.CSSStyleSheet.prototype) ? 'cssRules' : 'rules';

var CSSStyleSheet, cssRulesName;

if ('createStyleSheet' in document) {
  /**
   * constructor for old IE
   *
   * @constructor
   */
  CSSStyleSheet = function CSSStyleSheet() {
    this._element = document.createStyleSheet();

    head.appendChild(this._element);

    this._sheet = this._element.sheet;
  };
} else {
  /**
   * constructor for modern browsers
   *
   * @constructor
   */
  CSSStyleSheet = function CSSStyleSheet() {
    this._element = document.createElement('style');

    // NOTE: for WebKit
    this._element.appendChild(
      document.createTextNode('')
    );

    head.appendChild(this._element);

    this._sheet = this._element.sheet;
  };
}

CSSStyleSheet.prototype.insertRule = ('insertRule' in cssss) ?
  /**
   * insert rule for modern browsers
   *
   * @param {String} selector
   * @param {String} ruleText
   * @param {Number} index
   * @return {Number}
   */
  function insertRule(selector, ruleText, index) {
    return this._sheet.insertRule(selector + '{' + ruleText + '}', index);
  } :
  /**
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

CSSStyleSheet.prototype.deleteRule = ('deleteRule' in cssss) ?
  /**
   * delete rule for modern browsers
   *
   * @return {Undefined}
   */
  function deleteRule(index) {
    return this._sheet.deleteRule(index);
  } :
  /**
   * delete rule for old IE
   *
   * @return {Undefined}
   */
  function deleteRule(index) {
    return this._sheet.removeRule(index);
  };

/**
 * insert rule at last
 *
 * @param {String} selector
 * @param {String} ruleText
 * @return {Number}
 */
CSSStyleSheet.prototype.addRule = function addRule(selector, ruleText) {
  var length = this._sheet[cssRulesName].length;

  return this.insertRule(selector, ruleText, length);
};

/**
 * delete all rule
 */
CSSStyleSheet.prototype.clearRule = function clearRule() {
  var i = this._sheet[cssRulesName].length;

  while (i--) {
    this.deleteRule(i);
  }
};

//------------------------------------------------------------------------------

/**
 * get style element
 *
 * @return {HTMLStyleElement}
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

//------------------------------------------------------------------------------

/**
 * create CSSStyleSheet instance
 *
 * @return {CSSStyleSheet}
 */
CSSStyleSheet.create = function create() {
  return new CSSStyleSheet();
};

module.exports = CSSStyleSheet;
