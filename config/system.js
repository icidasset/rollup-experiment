const { join } = require("path")
const { run } = require("static-base")
const ch = require("child_process")
const chalk = require("chalk")
const curry = require("1-liners/curry")
const fs = require("fs")
const map = require("1-liners/map")
const put = require("1-liners/put")


// ⚗️


const CWD = process.cwd()
const NODE_BIN = "./node_modules/.bin"

const all = curry(map)
const log = console.log



// 🎒


/**
 * Read a file.
 */
const read = all(f => (
  put("content", fs.readFileSync(f.entirePath), f)
))


/**
 * Write a file.
 */
const write = dest => all(f => {
  const dir = join(f.root, dest, f.dirname)
  const path = join(dir, f.basename + f.extname)

  ch.execSync(`mkdir -p ${dir}`)
  fs.writeFileSync(path, f.content, { encoding: null })

  return f
})



// 🚜


ch.execSync(`${NODE_BIN}/rollup src/index.js -c config/rollup.js -o build/app.js`)


run
  (read, write("build"))
  ("src/**/*.html", CWD).then(
    _   => log(chalk.green("🌷  Copied HTML files!")),
    err => log(chalk.red("🔥  Failed to copy HTML files!", err))
  )


run
  (read, write("build"))
  ("src/**/*.@(png|svg)", CWD).then(
    _   => log(chalk.green("🌷  Copied images!", "\n")),
    err => log(chalk.red("🔥  Failed to copy images!", err, "\n"))
  )
