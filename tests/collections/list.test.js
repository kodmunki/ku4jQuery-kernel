$(function(){
    function notOk(s, m) {equal(!!s,false,m);}

    var list =$.list();

    module("list");

    test('create', function () {
        expect(1);
        ok($.list());
    });
    
    test('add', function () {
        var list = $.list();

        expect(1);
        list.add(null)
            .add(0)
            .add("")
            .add(new Date(2013, 1, 1));
        equal(list.count(), 4, "add");
    });
    
    test('contains', function () {
        var list = $.list([null, 0, "", new Date(2013, 1, 1)]);

        expect(4);
        ok(list.contains(null));
        ok(list.contains(0));
        ok(list.contains(""));
        ok(list.contains(new Date(2013, 1, 1)));
    });
    
    test('find', function () {
        var list = $.list([null, 0, "", new Date(2013, 1, 1)]);

        expect(4);
        equal(list.find(0), null);
        equal(list.find(1), 0);
        equal(list.find(2), "");
        deepEqual(list.find(3), new Date(2013, 1, 1));
    });
    
    test('remove', function () {
        var list = $.list([null, 0, "", new Date(2013, 1, 1)]);

        expect(1);
        list.remove(null)
            .remove(0)
            .remove("")
            .remove(new Date(2013, 1, 1));

        equal(list.count(), 0, "remove");
    });
    
    test('toArray', function () {
        var list = $.list([null, undefined, 0, "", new Date(2013, 1, 1)]);

        expect(2);
        list.add(null)
            .add(0)
            .add("")
            .add(new Date(2013, 1, 1));
        var array = list.toArray();
        ok($.isArray(array));
        equal(array.length, 8);
    });
    
    test('clear', function () {
        var list = $.list([null, 0, "", new Date(2013, 1, 1)]);

        expect(1);
        list.clear();
        equal(list.count(), 0, "clear");
    });
    
    test('isEmpty', function () {
        var list = $.list([null, 0, "", new Date(2013, 1, 1)]);

        expect(2);
        ok(!list.isEmpty(), "isEmpty");
        ok(list.clear().isEmpty(), "isEmpty");
    });

    test('each-performance', function () {

        function testPerformance(number, time) {
            var array = [], test = [];
            for (var i = 0; i < number; i++) {
                array[array.length] = i;
            }
            performanceOk(function () {
                $.list(array).each(function (item) {
                    test[test.length] = item;
                });
            }, time);
            equal(array.length, number);
            equal(test.length, number);
        }

        testPerformance(10, 3);
        testPerformance(100, 15);
        testPerformance(1000, 45);
        testPerformance(10000, 400);
        testPerformance(100000, 5000);
    });
});