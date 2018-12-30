import assert from 'assert';

import CSSStyleSheet from '../index.mjs';

describe('CSSStyleSheet', function() {
  describe('insertRule', function() {
    it('can insert rule', function() {
      const sheet = new CSSStyleSheet();
      const rules = sheet.getRules();
      const count = rules.length;

      sheet.insertRule('body', 'background-color: transparent', 0);

      assert(rules.length > count);
    });
  });
  describe('deleteRule', function() {
    it('can delete rule', function() {
      const sheet = new CSSStyleSheet();
      const rules = sheet.getRules();
      const count = rules.length;

      sheet.insertRule('body', 'background-color: transparent', 0);

      assert(rules.length > count);

      sheet.deleteRule(0);

      assert(rules.length === count);
    });
  });
  describe('create', function() {
    it('return CSSStyleSheet instance', function() {
      assert(CSSStyleSheet.create() instanceof CSSStyleSheet);
    });
  });
});
