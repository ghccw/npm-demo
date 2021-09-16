import json from "rollup-plugin-json";
import babel from "@rollup/plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import { version } from "./package.json";
import typescript from "rollup-plugin-typescript2";
const { uglify } = require("rollup-plugin-uglify");
const date = `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`;
const preamble = `
/*! *****************************************************************************
 * Copyright (c)
 * version ${version}
 *    Date ${date}
 *  Author Kingwell
 ****************************************************************************** */
`;

const formats = [
  // "cjs",
  "umd",
  // "amd",
  "esm",
  "iife",
];
// rollup.config.js
export default {
  input: "src/index.ts",
  output: formats.map((format) => {
    return {
      file: `./dist/${format}/index.js`,
      format,
      name: format === "umd" ? format : undefined,
    };
  }),
  plugins: [
    commonjs(),
    json(),
    babel({
      exclude: "node_modules/**",
      presets: [
        [
          "@babel/env",
          {
            modules: "false",
            targets: {
              browsers: "> 1%, IE 11, not op_mini all, not dead",
              node: 8,
            },
            useBuiltIns: "usage",
          },
        ],
      ],
    }),
    typescript({ lib: ["es5", "es6", "dom"], target: "es5" }),
    // uglify({
    //   output: {
    //     // comments: "all",
    //     preamble,
    //   },
    // }),
  ],
};
