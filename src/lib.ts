import { dlopen, FFIType, suffix } from 'bun:ffi';

const lib = dlopen(`../rust/target/release/rust.${suffix}`, {
    add: {
        args: [FFIType.i32, FFIType.i32],
        returns: FFIType.i32,
    },
});

export function add(x: number, y: number): number {
    return lib.symbols.add(x, y);
};

