(function(){

  'use strict';

  describe('cssstylesheet', function() {

    describe('insertRule', function() {

      it('can insert rule', function() {
        var sheet, rules, count;

        sheet = new cssstylesheet;
        rules = sheet.getRules();
        count = rules.length;

        sheet.insertRule('body', 'background-color: transparent', 0);

        assert(rules.length > count);
      });

    });

    describe('deleteRule', function() {

      it('can delete rule', function() {
        var sheet, rules, count;

        sheet = new cssstylesheet;
        rules = sheet.getRules();
        count = rules.length;

        sheet.insertRule('body', 'background-color: transparent', 0);

        assert(rules.length > count);

        sheet.deleteRule(0);

        assert(rules.length === count);
      });

    });

    describe('create', function() {

      it('return CSSStyleSheet instance', function() {
        assert(cssstylesheet.create() instanceof cssstylesheet);
      });

    });

  });

}());
