import { suffix } from 'bun:ffi';
import { cp } from "fs/promises";

await Bun.build({
    entrypoints: ['./src/index.ts'],
    outdir: './dist',
    minify: true,
    target: 'bun',
});

await cp(`./rust/target/release/rustlib.${suffix}`, `./dist/rustlib.${suffix}`);
