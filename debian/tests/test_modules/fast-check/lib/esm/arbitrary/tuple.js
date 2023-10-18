import { convertFromNext, convertToNext } from '../check/arbitrary/definition/Converters.js';
import { TupleArbitrary } from './_internals/TupleArbitrary.js';
export function tuple(...arbs) {
    const nextArbs = arbs.map((arb) => convertToNext(arb));
    return convertFromNext(new TupleArbitrary(nextArbs));
}
