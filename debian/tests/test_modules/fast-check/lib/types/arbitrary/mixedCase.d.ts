import { Arbitrary } from '../check/arbitrary/definition/Arbitrary';
/**
 * Constraints to be applied on {@link mixedCase}
 * @remarks Since 1.17.0
 * @public
 */
export interface MixedCaseConstraints {
    /**
     * Transform a character to its upper and/or lower case version
     * @remarks Since 1.17.0
     */
    toggleCase?: (rawChar: string) => string;
    /**
     * In order to be fully reversable (only in case you want to shrink user definable values)
     * you should provide a function taking a string containing possibly toggled items and returning its
     * untoggled version.
     */
    untoggleAll?: (toggledString: string) => string;
}
/**
 * Randomly switch the case of characters generated by `stringArb` (upper/lower)
 *
 * WARNING:
 * Require bigint support.
 * Under-the-hood the arbitrary relies on bigint to compute the flags that should be toggled or not.
 *
 * @param stringArb - Arbitrary able to build string values
 * @param constraints - Constraints to be applied when computing upper/lower case version
 *
 * @remarks Since 1.17.0
 * @public
 */
export declare function mixedCase(stringArb: Arbitrary<string>, constraints?: MixedCaseConstraints): Arbitrary<string>;
