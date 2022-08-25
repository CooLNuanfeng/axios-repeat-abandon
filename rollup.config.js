import resolve from "@rollup/plugin-node-resolve";
import nodePolyfills from 'rollup-plugin-polyfill-node';
import commonjs from '@rollup/plugin-commonjs';
import babel from "@rollup/plugin-babel";
import typescript from '@rollup/plugin-typescript';

export default {
  input: "./index.ts", // 打包入口
  output: [
    {
      // 打包出口
      file: "dist/axios-repeat-abandon.js",
      format: "umd", // umd是兼容amd/cjs/iife的通用打包格式，适合浏览器
      name: "AxiosRepeatAbandon", // cdn方式引入时挂载在window上面用的就是这个名字
      sourcemap: true,
    },
    {
      // 打包出口
      file: "dist/index.js",
      format: "es", // umd是兼容amd/cjs/iife的通用打包格式，适合浏览器
    },
  ],
  plugins: [
    // 打包插件
    typescript({ 
      compilerOptions: {  
        lib: ["es5", "es6", "dom"], 
        target: "es5"
    }}), // 解析TypeScript
    babel({ babelHelpers: "bundled" }), // babel配置,编译es6
    nodePolyfills(),
    resolve(),
    commonjs(),
  ],
};