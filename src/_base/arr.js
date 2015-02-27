if(!$.exists($.arr)) $.arr = { };
$.arr.indexOfRegExp = function(array, regexp) {
    for (n in array) {
        var value = array[n];
        if(regexp.test(array[n])) return n;
    }
    return -1;
};
$.arr.parseArguments = function(args) {
    return Array.prototype.slice.call(args);
};