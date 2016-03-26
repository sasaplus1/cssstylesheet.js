/*!
 * @license cssstylesheet.js Copyright(c) 2016 sasa+1
 * https://github.com/sasaplus1/cssstylesheet.js
 * Released under the MIT license.
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["cssstylesheet"] = factory();
	else
		root["cssstylesheet"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	var head = document.getElementsByTagName('head')[0],
	    cssss = window.CSSStyleSheet;

	var CSSStyleSheet;

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
	  var length = this._sheet.rules.length;

	  return this.insertRule(selector, ruleText, length);
	};

	/**
	 * delete all rule
	 */
	CSSStyleSheet.prototype.clearRule = function clearRule() {
	  var i = this._sheet.rules.length;

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


/***/ }
/******/ ])
});
;