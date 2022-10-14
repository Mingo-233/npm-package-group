import babel from "@rollup/plugin-babel";
// // 处理es6代码转换
import resolve from "@rollup/plugin-node-resolve"; // 告诉rollup如何查找外部模块并安装
import commonjs from "@rollup/plugin-commonjs"; // 可以导入已有的cjs模块，使rollup可以识别它
import postcss from "rollup-plugin-postcss"; // 样式文件处理
import simplevars from "postcss-simple-vars"; // 处理css定义的变量
import nested from "postcss-nested"; // 处理less嵌套样式写法
import cssnano from "cssnano"; // css代码压缩
import { terser } from "rollup-plugin-terser"; // 代码压缩
import url from "postcss-url"; // 处理css文件引入的图片
import image from "@rollup/plugin-image"; // 处理template图片
import createVuePlugin2 from "rollup-plugin-vue2"; // vue2打包
import createVuePlugin3 from "rollup-plugin-vue3"; // vue3打包
import ScriptSetup from "unplugin-vue2-script-setup/rollup"; // vue2 支持 setup语法
import { getDistDir } from "./scripts/utils.mjs";
import { isVue2, version } from "vue-demi"; // 入口文件
console.log(babel);
const entry = "src/entry.ts";
// babel配置
const babelOptions = {
  presets: ["@babel/preset-env"],
  exclude: "**/node_modules/**",
}; // rollup配置
export default {
  // 入口
  input: entry, // 打包信息
  output: [
    { file: getDistDir(version) + "index.es.js", format: "es" },
    {
      file: getDistDir(version) + "index.cjs.js",
      format: "cjs",
      exports: "default",
    },
    {
      file: getDistDir(version) + "index.umd.js",
      format: "umd",
      name: "bundle",
    },
  ],
  // 将模块视为外部模块，不会打包在库中，这里视项目具体情况自行调整 如： '@ant-design/icons',
  external: ["vue", "vue-demi"], // 插件配置
  plugins: [
    isVue2 ? ScriptSetup() : undefined,
    isVue2
      ? createVuePlugin2({ css: false })
      : createVuePlugin3({ preprocessStyles: true }),
    image(),
    postcss({
      plugins: [
        url({ url: "inline", maxSize: 10 }),
        simplevars(),
        nested(),
        cssnano(),
      ],
      extensions: [".css", "less"],
    }),
    resolve({
      extensions: [".vue"],
      // 无后缀名引用时，需要识别 .vue 文件
      exclude: "**/node_modules/**", // 排除node_modules
    }),
    commonjs(),
    babel.babel(babelOptions),
    terser(),
  ],
};
