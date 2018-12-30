/*!
 * @license cssstylesheet.js Copyright(c) 2016 sasa+1
 * https://github.com/sasaplus1/cssstylesheet.js
 * Released under the MIT license.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  global.cssstylesheet = factory();
}(typeof self !== 'undefined' ? self : this, function () { 'use strict';

  // NOTE: getElementsByTagName returns HTMLCollection(or NodeList) every time
  var head = document.getElementsByTagName('head')[0];
  var cssss = window.CSSStyleSheet;
  var cssRulesName = 'cssRules' in cssss.prototype ? 'cssRules' : 'rules';
  var cssDeleteRuleName = 'deleteRule' in cssss.prototype ? 'deleteRule' : 'removeRule';
  var CSSStyleSheet = 'createStyleSheet' in document ?
  /**
   * constructor for old IE
   *
   * @constructor
   */
  function CSSStyleSheet() {
    this._element = null;
    this._sheet = document.createStyleSheet();
  } :
  /**
   * constructor for modern browsers
   *
   * @constructor
   */
  function CSSStyleSheet() {
    this._element = document.createElement('style'); // NOTE: for WebKit

    this._element.appendChild(document.createTextNode(''));

    head.appendChild(this._element);
    this._sheet = this._element.sheet;
  };
  CSSStyleSheet.prototype.insertRule = 'insertRule' in cssss.prototype ?
  /**
   * insert rule for modern browsers
   *
   * @param {string} selector
   * @param {string} ruleText
   * @param {number} index
   * @return {number}
   */
  function insertRule(selector, ruleText, index) {
    return this._sheet.insertRule(selector + '{' + ruleText + '}', index);
  } :
  /**
   * insert rule for old IE
   *
   * @param {string} selector
   * @param {string} ruleText
   * @param {number} index
   * @return {number}
   */
  function insertRule(selector, ruleText, index) {
    return this._sheet.addRule(selector, ruleText, index);
  };
  /**
   * delete rule for modern browsers
   *
   * @return {undefined}
   */

  CSSStyleSheet.prototype.deleteRule = function deleteRule(index) {
    return this._sheet[cssDeleteRuleName](index);
  };
  /**
   * insert rule at last
   *
   * @param {string} selector
   * @param {string} ruleText
   * @return {number}
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
  /**
   * get style element
   *
   * @return {HTMLStyleElement?}
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

  /**
   * @file entrypoint for ES Modules.
   */

  return CSSStyleSheet;

}));
//# sourceMappingURL=cssstylesheet.legacy.js.map
