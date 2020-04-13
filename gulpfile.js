const { series, src, dest, watch } = require("gulp")
const sass = require("gulp-sass")
const concat = require("gulp-concat")

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
  src(["src/libs/bootstrap/css/*.css", "src/sass/*.scss"])
    .pipe(sass().on("error", sass.logError))
    .pipe(concat("bundle.css"))
    .pipe(dest("src/bundles"))
  cb()
}

function bundleJs(cb) {
  src([
    // "node_modulesjquerydistjquery.min.js",
    // "node_modulespopper.jsdistpopper.min.js",
    // "node_modules/bootstrap/dist/js/bootstrap.min.js",
    "src/scripts/*.js"
  ])
    .pipe(concat("bundle.js"))
    .pipe(dest("src/bundles"))
  cb()
}

function watcher(cb) {
  watch(
    ["src/libs/bootstrap/css/*.css", "src/sass/*.scss"],
    series("compileSass")
  )
  watch([popper, jquery, bootstrap, "src/scripts/*.js"], series("bundleJs"))
  cb()
}

exports.copyHtml = copyHtml
exports.compileSass = compileSass
exports.bundleJs = bundleJs
exports.watcher = watcher
exports.default = series(hello)
