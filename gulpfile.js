const { series, src, dest, watch } = require("gulp");
const sass = require("gulp-sass");
const concat = require("gulp-concat");
const autoprefixer = require("gulp-autoprefixer");

const jsLibs = [
  "node_modules/jquery/dist/jquery.min.js",
  "node_modules/bootstrap/dist/js/bootstrap.min.js",
  "node_modules/chart.js/dist/chart.min.js",
];

const cssLibs = [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "node_modules/chart.js/dist/chart.min.css",
];

function compileSass(cb) {
  src([...cssLibs, "src/scss/*.scss", "src/scss/**/*.scss"])
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(concat("bundle.css"))
    .pipe(dest("src/bundles"));
  cb();
}

function bundleJs(cb) {
  src([...jsLibs, "src/js/listeners.js"])
    .pipe(concat("bundle.js"))
    .pipe(dest("src/bundles"));
  cb();
}

function watcher(cb) {
  watch(
    [...cssLibs, "src/scss/*.scss", "src/scss/**/*.scss"],
    series("compileSass", "bundleJs")
  );
  cb();
}

exports.compileSass = compileSass;
exports.bundleJs = bundleJs;
exports.watcher = watcher;
