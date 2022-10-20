"use strict";
exports.__esModule = true;
var IntegerArbitrary_1 = require("./IntegerArbitrary");
function date(constraints) {
    var intMin = constraints && constraints.min ? constraints.min.getTime() : -8640000000000000;
    var intMax = constraints && constraints.max ? constraints.max.getTime() : 8640000000000000;
    if (Number.isNaN(intMin))
        throw new Error('fc.date min must be valid instance of Date');
    if (Number.isNaN(intMin))
        throw new Error('fc.date max must be valid instance of Date');
    if (intMin > intMax)
        throw new Error('fc.date max must be greater or equal to min');
    return IntegerArbitrary_1.integer(intMin, intMax).map(function (a) { return new Date(a); });
}
exports.date = date;
