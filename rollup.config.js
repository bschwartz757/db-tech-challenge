import svelte from "rollup-plugin-svelte";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import buble from "rollup-plugin-buble";
import clean from "rollup-plugin-clean";
import uglify from "rollup-plugin-uglify";
import postcss from "rollup-plugin-postcss";

const production = !process.env.ROLLUP_WATCH;

export default {
  input: "src/main.js",
  output: {
    sourcemap: true,
    format: "iife",
    name: "app",
    file: "public/js/bundle.js"
  },
  plugins: [
    svelte({
      dev: !production,
      css: css => {
        css.write("public/css/bundle.css");
      }
    }),
    html({
      template: "src/index.html",
      filename: "index.html"
    }),
    postcss({
      plugins: []
    }),
    clean(),
    resolve(),
    commonjs(),
    production && buble({ exclude: "node_modules/**" }),
    production && uglify()
  ]
};
