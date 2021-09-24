# Mapped Types

In this exercise we want to be able to create a typescript type that can
take an object as a generic parameter and modify the keys to be uppercase.

For example:

```
ToUppercase<{
    hello: 'world',
    nested: { property: 'too' },
}>;
```

Should resolve to the following type:

```
{
    HELLO: 'world',
    NESTED: { PROPERTY: 'too' }
}
```

You will find the type you need to modify in `./src/index.d.ts`

The tests are found in `index.test-d.ts`. It uses a conditional-type-checks library
which can be used to assert whether a type matches another type or not. 

You will also be able to hover over the output value types to see what your type actually is.