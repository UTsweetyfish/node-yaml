import { Arbitrary } from '../arbitrary/definition/Arbitrary';
import { IRawProperty } from '../property/IRawProperty';
import { Parameters } from './configuration/Parameters';
/**
 * Generate an array containing all the values that would have been generated during {@link assert} or {@link check}
 *
 * @example
 * ```typescript
 * fc.sample(fc.nat(), 10); // extract 10 values from fc.nat() Arbitrary
 * fc.sample(fc.nat(), {seed: 42}); // extract values from fc.nat() as if we were running fc.assert with seed=42
 * ```
 *
 * @param generator - {@link IProperty} or {@link Arbitrary} to extract the values from
 * @param params - Integer representing the number of values to generate or `Parameters` as in {@link assert}
 *
 * @remarks Since 0.0.6
 * @public
 */
declare function sample<Ts>(generator: IRawProperty<Ts> | Arbitrary<Ts>, params?: Parameters<Ts> | number): Ts[];
/**
 * Gather useful statistics concerning generated values
 *
 * Print the result in `console.log` or `params.logger` (if defined)
 *
 * @example
 * ```typescript
 * fc.statistics(
 *     fc.nat(999),
 *     v => v < 100 ? 'Less than 100' : 'More or equal to 100',
 *     {numRuns: 1000, logger: console.log});
 * // Classify 1000 values generated by fc.nat(999) into two categories:
 * // - Less than 100
 * // - More or equal to 100
 * // The output will be sent line by line to the logger
 * ```
 *
 * @param generator - {@link IProperty} or {@link Arbitrary} to extract the values from
 * @param classify - Classifier function that can classify the generated value in zero, one or more categories (with free labels)
 * @param params - Integer representing the number of values to generate or `Parameters` as in {@link assert}
 *
 * @remarks Since 0.0.6
 * @public
 */
declare function statistics<Ts>(generator: IRawProperty<Ts> | Arbitrary<Ts>, classify: (v: Ts) => string | string[], params?: Parameters<Ts> | number): void;
export { sample, statistics };
