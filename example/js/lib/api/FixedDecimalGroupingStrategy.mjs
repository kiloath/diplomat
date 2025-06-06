// generated by diplomat-tool
import wasm from "./diplomat-wasm.mjs";
import * as diplomatRuntime from "./diplomat-runtime.mjs";



export class FixedDecimalGroupingStrategy {
    #value = undefined;

    static #values = new Map([
        ["Auto", 0],
        ["Never", 1],
        ["Always", 2],
        ["Min2", 3]
    ]);

    static getAllEntries() {
        return FixedDecimalGroupingStrategy.#values.entries();
    }

    #internalConstructor(value) {
        if (arguments.length > 1 && arguments[0] === diplomatRuntime.internalConstructor) {
            // We pass in two internalConstructor arguments to create *new*
            // instances of this type, otherwise the enums are treated as singletons.
            if (arguments[1] === diplomatRuntime.internalConstructor ) {
                this.#value = arguments[2];
                return this;
            }
            return FixedDecimalGroupingStrategy.#objectValues[arguments[1]];
        }

        if (value instanceof FixedDecimalGroupingStrategy) {
            return value;
        }

        let intVal = FixedDecimalGroupingStrategy.#values.get(value);

        // Nullish check, checks for null or undefined
        if (intVal != null) {
            return FixedDecimalGroupingStrategy.#objectValues[intVal];
        }

        throw TypeError(value + " is not a FixedDecimalGroupingStrategy and does not correspond to any of its enumerator values.");
    }

    static fromValue(value) {
        return new FixedDecimalGroupingStrategy(value);
    }

    get value(){
        return [...FixedDecimalGroupingStrategy.#values.keys()][this.#value];
    }

    get ffiValue(){
        return this.#value;
    }
    static #objectValues = [
        new FixedDecimalGroupingStrategy(diplomatRuntime.internalConstructor, diplomatRuntime.internalConstructor, 0),
        new FixedDecimalGroupingStrategy(diplomatRuntime.internalConstructor, diplomatRuntime.internalConstructor, 1),
        new FixedDecimalGroupingStrategy(diplomatRuntime.internalConstructor, diplomatRuntime.internalConstructor, 2),
        new FixedDecimalGroupingStrategy(diplomatRuntime.internalConstructor, diplomatRuntime.internalConstructor, 3),
    ];

    static Auto = FixedDecimalGroupingStrategy.#objectValues[0];
    static Never = FixedDecimalGroupingStrategy.#objectValues[1];
    static Always = FixedDecimalGroupingStrategy.#objectValues[2];
    static Min2 = FixedDecimalGroupingStrategy.#objectValues[3];


    constructor(value) {
        return this.#internalConstructor(...arguments)
    }
}