// generated by diplomat-tool
import type { pointer, codepoint } from "./diplomat-runtime.d.ts";


/**
 * See the [Rust documentation for `FixedDecimal`](https://docs.rs/fixed_decimal/latest/fixed_decimal/struct.FixedDecimal.html) for more information.
 */


export class FixedDecimal {
    get ffiValue(): pointer;


    /**
     * Multiply the [`FixedDecimal`] by a given power of ten.
     *
     * See the [Rust documentation for `multiply_pow10`](https://docs.rs/fixed_decimal/latest/fixed_decimal/struct.FixedDecimal.html#method.multiply_pow10) for more information.
     */
    multiplyPow10(power: number): void;

    /**
     * Format the [`FixedDecimal`] as a string.
     *
     * See the [Rust documentation for `write_to`](https://docs.rs/fixed_decimal/latest/fixed_decimal/struct.FixedDecimal.html#method.write_to) for more information.
     */
    toString(): string | null;

    constructor(v: number);
}