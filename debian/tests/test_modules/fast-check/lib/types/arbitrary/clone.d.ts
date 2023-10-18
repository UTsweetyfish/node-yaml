import { Arbitrary } from '../check/arbitrary/definition/Arbitrary';
/**
 * Type of the value produced by {@link clone}
 * @remarks Since 2.5.0
 * @public
 */
export declare type CloneValue<T, N extends number> = N extends 0 ? [] : N extends 1 ? [T] : N extends 2 ? [T, T] : N extends 3 ? [T, T, T] : N extends 4 ? [T, T, T, T] : T[];
/**
 * Clone the values generated by `arb` in order to produce fully equal values (might not be equal in terms of === or ==)
 *
 * @param arb - Source arbitrary
 * @param numValues - Number of values to produce
 *
 * @remarks Since 2.5.0
 * @public
 */
declare function clone<T, N extends number>(arb: Arbitrary<T>, numValues: N): Arbitrary<CloneValue<T, N>>;
export { clone };
