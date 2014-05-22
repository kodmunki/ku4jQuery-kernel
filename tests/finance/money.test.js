$(function(){
    function notOk(s, m) {equal(!!s,false,m);}
    
    var two = $.money(2.625),
        six = $.money(6.125),
        sixAmps = $.money(11, "&");
    
    module("money");

    test("create", function() {
        expect(8);
        raises(function(){$.money(null);});
        raises(function(){$.money(undefined);});
        ok($.money(4));
        ok($.money.parse("$5.99"));
        
        equal(two.cents(), .625);
        equal(two.dollars(), 2);
        equal(two.currency(), "$");
        equal(two.value(), 2.625);
    });

    test("exchange", function () {
        expect(1);
        ok($.money(4, "$").exchange(.25, "B").equals($.money(1, "B")));
    });

    test("add", function() {
        expect(8);
        raises(function(){six.add(null)});
        raises(function(){six.add(undefined);});
        raises(function(){six.add("");});
        raises(function(){six.add("2");});
        raises(function(){six.add(2);});
        raises(function(){six.add(sixAmps);});
        
        ok(six.add(two).equals($.money(8.75)));
        ok(two.add(six).equals($.money(8.75)));
    });
    
    test("subtract", function() {
        expect(8);
        raises(function(){six.subtract(null)});
        raises(function(){six.subtract(undefined);});
        raises(function(){six.subtract("");});
        raises(function(){six.subtract("2");});
        raises(function(){six.subtract(2);});
        raises(function(){six.subtract(sixAmps);});
        
        ok(six.subtract(two).equals($.money(3.50)));
        ok(two.subtract(six).equals($.money(-3.50)));
    });
    
    test("multiply", function() {
        expect(9);
        raises(function(){six.multiply(null)});
        raises(function(){six.multiply(undefined);});
        raises(function(){six.multiply("");});
        raises(function(){six.multiply("2");});
        raises(function(){six.multiply(sixAmps);});
        raises(function(){six.multiply(two);});
        raises(function(){two.multiply(six);});
        
        ok(six.multiply(2).equals($.money(12.25)));
        ok(six.multiply(-2).equals($.money(-12.25)));
    });
    
    test("divide", function() {
        expect(9);
        raises(function(){six.divide(null)});
        raises(function(){six.divide(undefined);});
        raises(function(){six.divide("");});
        raises(function(){six.divide("2");});
        raises(function(){six.divide(sixAmps);});
        raises(function(){six.divide(two);});
        raises(function(){two.divide(six);});
        
        ok(six.divide(2).equals($.money(3.0625)));
        ok(six.divide(-2).equals($.money(-3.0625)));
    });

    test("round", function() {
        expect(1);
        ok(six.round().equals($.money(6.13)));
    });

    test("roundUp", function() {
        expect(1);
        ok(six.roundUp().equals($.money(6.13)));
    });

    test("roundDown", function() {
        expect(1);
        ok(six.roundDown().equals($.money(6.12)));
    });

    test("nearestDollar", function() {
        expect(2);
        ok($.money(6.49).nearestDollar().equals($.money(6.00)));
        ok($.money(6.50).nearestDollar().equals($.money(7.00)));
    });

    test("isOfCurrency", function() {
        expect(1);
        ok(six.isOfCurrency(two));
    });
    
    test("isGreaterThan", function() {
        expect(1);
        ok(six.isGreaterThan(two));
    });
    
    test("isLessThan", function() {
        expect(1);
        ok(two.isLessThan(six));
    });

    test("toString", function() {
        expect(7);
        equal(two.toString(), "$2.63");
        equal($.money(298765.54).toString(), "$298,765.54");
        equal($.money(298765.54).toString("-"), "$298-765.54");
        equal($.money(298765.54).toString(",", "."), "$298,765.54");
        equal($.money(298765.54).toString(".", ","), "$298.765,54");
        equal($.money(-298765.54).toString(",", "."), "($298,765.54)");
        equal($.money(-298765.54).toString(".", ","), "($298.765,54)");
    });

    test("zero", function() {
        var zero = $.money.zero();
        expect(4);
        equal(zero.dollars(), 0);
        equal(zero.cents(), 0);
        equal(zero.value(), 0);
        equal(zero.toString(), "$0.00");
    });
});