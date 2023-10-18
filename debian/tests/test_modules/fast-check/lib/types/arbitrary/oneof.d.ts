import { Arbitrary } from '../check/arbitrary/definition/Arbitrary';
/**
 * Infer the type of the Arbitrary produced by {@link oneof}
 * given the type of the source arbitraries
 *
 * @remarks Since 2.2.0
 * @public
 */
export declare type OneOfValue<Ts extends Arbitrary<unknown>[]> = {
    [K in keyof Ts]: Ts[K] extends Arbitrary<infer U> ? U : never;
}[number];
/**
 * Constraints to be applied on {@link oneof}
 * @remarks Since 2.14.0
 * @public
 */
export declare type OneOfConstraints = {
    /**
     * When set to true, the shrinker of oneof will try to check if the first arbitrary
     * could have been used to discover an issue. It allows to shrink trees.
     *
     * Warning: First arbitrary must be the one resulting in the smallest structures
     * for usages in deep tree-like structures.
     *
     * @remarks Since 2.14.0
     */
    withCrossShrink?: boolean;
    /**
     * While going deeper and deeper within a recursive structure (see {@link letrec}),
     * this factor will be used to increase the probability to generate instances
     * of the first passed arbitrary.
     *
     * Example of values: 0.1 (small impact as depth increases), 0.5, 1 (huge impact as depth increases).
     *
     * @remarks Since 2.14.0
     */
    depthFactor?: number;
    /**
     * Maximal authorized depth.
     * Once this depth has been reached only the first arbitrary will be used.
     *
     * @remarks Since 2.14.0
     */
    maxDepth?: number;
    /**
     * Depth identifier can be used to share the current depth between several instances.
     *
     * By default, if not specified, each instance of oneof will have its own depth.
     * In other words: you can have depth=1 in one while you have depth=100 in another one.
     *
     * @remarks Since 2.14.0
     */
    depthIdentifier?: string;
};
/**
 * For one of the values generated by `...arbs` - with all `...arbs` equiprobable
 *
 * **WARNING**: It expects at least one arbitrary
 *
 * @param arbs - Arbitraries that might be called to produce a value
 *
 * @remarks Since 0.0.1
 * @public
 */
declare function oneof<Ts extends Arbitrary<unknown>[]>(...arbs: Ts): Arbitrary<OneOfValue<Ts>>;
/**
 * For one of the values generated by `...arbs` - with all `...arbs` equiprobable
 *
 * **WARNING**: It expects at least one arbitrary
 *
 * @param constraints - Constraints to be applied when generating the values
 * @param arbs - Arbitraries that might be called to produce a value
 *
 * @remarks Since 2.14.0
 * @public
 */
declare function oneof<Ts extends Arbitrary<unknown>[]>(constraints: OneOfConstraints, ...arbs: Ts): Arbitrary<OneOfValue<Ts>>;
export { oneof };
