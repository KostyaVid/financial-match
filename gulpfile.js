const { src, dest, parallel, series, watch } = require("gulp");
const inlineCss = require("gulp-inline-css");
const browserSync = require("browser-sync").create();

function browsersync() {
  browserSync.init({
    server: { baseDir: "src/" },
    notify: false,
    online: true,
  });
}

function styles() {
  return src("src/*.html")
    .pipe(inlineCss())
    .pipe(dest("build/"))
    .pipe(browserSync.stream());
}

function startwatch() {
  watch(["src/**/*.html"], styles);
}

exports.styles = styles;
exports.browsersync = browsersync;
exports.default = parallel(styles, browsersync, startwatch);
