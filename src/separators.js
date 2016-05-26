'use strict';

function thousands_separators(num) {
    var a = num.toString();
    var b = split_dot(a);
    var result = split_comma(b);
    return result;
}

function split_dot(a) {
    var a;
    var str = [];

    a = a.indexOf('.');
    if (a === -1) {
        str.push(a);
    }
    else {
        str=a.split('.');
    }

    return str;
}

function split_comma(b) {
    var result;

    if (b[0].length <= 3) {
        result = b[0];
    }
    else {
        var pos = b[0].length % 3;
        result = b[0].slice(0, pos) + ',';
        while (b[0].length - pos > 3) {
            result += b[0].slice(pos, pos + 3) + ',';
            pos = pos + 3;
        }
        result += b[0].slice(pos);
    }

    if (b.length > 1) {
        result += '.';
        result += str[1];
    }

    return result;
}

module.exports = thousands_separators;
