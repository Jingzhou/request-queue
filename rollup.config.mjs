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
    terser(),
    typescript(),
  ],
};
export default config;
