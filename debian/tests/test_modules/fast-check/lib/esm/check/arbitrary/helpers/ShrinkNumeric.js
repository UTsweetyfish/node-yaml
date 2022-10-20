import { __generator } from "tslib";
import { stream } from '../../../stream/Stream.js';
function shrinkNumericInternal(current, target, shrunkOnce, halvePos, halveNeg) {
    var realGap = (current - target);
    function shrinkDecr() {
        var gap, toremove;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    gap = shrunkOnce ? halvePos(realGap) : realGap;
                    toremove = gap;
                    _a.label = 1;
                case 1:
                    if (!(toremove > 0)) return [3, 4];
                    return [4, (current - toremove)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    toremove = halvePos(toremove);
                    return [3, 1];
                case 4: return [2];
            }
        });
    }
    function shrinkIncr() {
        var gap, toremove;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    gap = shrunkOnce ? halveNeg(realGap) : realGap;
                    toremove = gap;
                    _a.label = 1;
                case 1:
                    if (!(toremove < 0)) return [3, 4];
                    return [4, (current - toremove)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    toremove = halveNeg(toremove);
                    return [3, 1];
                case 4: return [2];
            }
        });
    }
    return realGap > 0 ? stream(shrinkDecr()) : stream(shrinkIncr());
}
function halveBigInt(n) {
    return n / BigInt(2);
}
function halvePosNumber(n) {
    return Math.floor(n / 2);
}
function halveNegNumber(n) {
    return Math.ceil(n / 2);
}
function shrinkNumeric(zero, min, max, current, shrunkOnce, halvePos, halveNeg) {
    if (min <= zero && max >= zero) {
        return shrinkNumericInternal(current, zero, shrunkOnce, halvePos, halveNeg);
    }
    return current < zero
        ? shrinkNumericInternal(current, max, shrunkOnce, halvePos, halveNeg)
        : shrinkNumericInternal(current, min, shrunkOnce, halvePos, halveNeg);
}
export function shrinkNumber(min, max, current, shrunkOnce) {
    return shrinkNumeric(0, min, max, current, shrunkOnce, halvePosNumber, halveNegNumber);
}
export function shrinkBigInt(min, max, current, shrunkOnce) {
    return shrinkNumeric(BigInt(0), min, max, current, shrunkOnce, halveBigInt, halveBigInt);
}
