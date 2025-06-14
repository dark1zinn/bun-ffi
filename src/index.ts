import { dlopen, FFIType } from "bun:ffi";
import { definePlatformSuffix } from "./utils";
import path from 'path';

definePlatformSuffix()

const libPath = path.join(
    __dirname,
    `../rust/target/release/rust.${process.env.PLATFORM_SUFFIX}`
);

const lib = dlopen(libPath, {
    add: {
        args: [FFIType.i32, FFIType.i32],
        returns: FFIType.i32,
    },  
});

const result = lib.symbols.add(3, 4);
console.log(`Result from Rust: 3 + 4 = ${result}`);
