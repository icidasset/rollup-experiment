import commonjs from "rollup-plugin-commonjs"
import resolve from "rollup-plugin-node-resolve"
import unassert from "rollup-plugin-unassert"


export default {
  format: "iife",
  plugins: [ resolve(), unassert(), commonjs() ]
}
