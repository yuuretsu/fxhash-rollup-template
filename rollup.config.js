import { terser } from "rollup-plugin-terser";
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from "@rollup/plugin-typescript";


const production = !process.env.ROLLUP_WATCH;

export default {
  input: "./src/index.ts",
  output: {
    file: "./public/build/bundle.js"
  },
  plugins: [
    production && terser(),
    nodeResolve(),
    typescript()
  ],
};
