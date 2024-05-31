import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
// 处理TS
import terser from '@rollup/plugin-terser';
import typescript from 'rollup-plugin-typescript2';


const config = {
  input: "./src/index.ts",
  output: {
    file: "./dist/index.js",
    format: "es", // 编译模式
  },
  plugins: [
    // 引入的插件在这里配置
    // resolve({
    //   preferBuiltins: true,
    //   browser: true,
    // }),
    babel({
      exclude: "**/node_modules/**",
      babelHelpers: "runtime",
    }),
    commonjs(),
    terser(),
    typescript(),
  ],
};
export default config;
