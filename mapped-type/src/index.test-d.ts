import { assert, IsExact } from "conditional-type-checks";
import { ToUppercase } from ".";

assert<
    IsExact<
        {
            HELLO: true
        },
        ToUppercase<{ hello: true }>
    >
>(/** Single Property **/ true);

// Hover to check type.
export type OutputValue = ToUppercase<{ hello: true }>;

assert<
    IsExact<
        {
            HEY: true,
            HOW: 1,
        },
        ToUppercase<{ hey: true, how: 1 }>
    >
>(/** Multiple Properties **/ true);

// Hover to check type.
export type OutputValue2 = ToUppercase<{ hey: true, how: 1 }>;

assert<
    IsExact<
        {
            THIS: { WORKS: 'too' },
        },
        ToUppercase<{ this: { works: 'too' } }>
    >
>(/** Nested Objects **/ true);

// Hover to check type.
export type OutputValue3 = ToUppercase<{ this: { works: 'too' } }>;

