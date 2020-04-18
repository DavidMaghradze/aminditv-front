const { series, src, dest, watch } = require("gulp")
const sass = require("gulp-sass")
const concat = require("gulp-concat")
const chart = require("chart.js")

// The `build` function is exported so it is public and can be run with the `gulp` command.
// It can also be used within the `series()` composition.
function copyHtml(cb) {
  src("./*.html").pipe(dest("dist"))
  cb()
}

function hello(cb) {
  console.log("gulp is running.")
  cb()
}

function compileSass(cb) {
  src([
    "node_modules/chart.js/dist/chart.min.css",
    "src/scss/*.scss",
    "src/scss/abstracts/*.scss",
    "src/scss/base/*.scss",
    "src/scss/layout/*.scss"
  ])
    .pipe(sass().on("error", sass.logError))
    .pipe(concat("bundle.css"))
    .pipe(dest("src/bundles"))
  cb()
}

function bundleJs(cb) {
  src(["node_modules/chart.js/dist/chart.min.js"])
    .pipe(concat("bundle.js"))
    .pipe(dest("src/bundles"))
  cb()
}

function watcher(cb) {
  watch(
    [
      "node_modules/chart.js/dist/chart.min.css",
      "src/scss/*.scss",
      "src/scss/abstracts/*.scss",
      "src/scss/base/*.scss",
      "src/scss/layout/*.scss"
    ],
    series("compileSass")
  )
  cb()
}

exports.copyHtml = copyHtml
exports.compileSass = compileSass
exports.bundleJs = bundleJs
exports.watcher = watcher
exports.default = series(hello)
