const gulp = require("gulp");

const browserSync = require("browser-sync").create();

// Задача для копирования HTML файлов
gulp.task("html", function() {
  return gulp
    .src("src/*.html") // Путь к вашим HTML файлам
    .pipe(gulp.dest("dist")) // Путь к выходной директории
    .pipe(browserSync.stream()); // Обновление браузера
});

// Задача для работы с CSS
gulp.task("css", function() {
  return gulp
    .src("src/css/*.css") // Путь к вашим CSS файлам
    .pipe(gulp.dest("dist/css")) // Путь к выходной директории
    .pipe(browserSync.stream()); // Обновление браузера
});

// Задача для запуска BrowserSync
gulp.task("server", function() {
  browserSync.init({
    server: {
      baseDir: "./app", // Укажите директорию, из которой будут обслуживаться файлы
    },
    port: 3000, // Порт для локального сервера
    ui: {
      port: 3001, // Порт для интерфейса Browsersync
    },
  });

  // Наблюдение за изменениями в файлах
  gulp.watch("app/**/*.html").on("change", browserSync.reload);
  gulp.watch("app/**/*.css").on("change", browserSync.reload);
  gulp.watch("app/**/*.js").on("change", browserSync.reload);
});

// Задача по умолчанию
gulp.task("default", gulp.series("server"));

// Tasks
require("./gulp/dev.js");
require("./gulp/docs.js");
require("./gulp/fontsDev.js");
require("./gulp/fontsDocs.js");

gulp.task(
  "default",
  gulp.series(
    "clean:dev",
    "fontsDev",
    gulp.parallel(
      "html:dev",
      "sass:dev",
      "images:dev",
      gulp.series("svgStack:dev", "svgSymbol:dev"),
      "files:dev",
      "js:dev"
    ),
    gulp.parallel("server:dev", "watch:dev")
  )
);

gulp.task(
  "docs",
  gulp.series(
    "clean:docs",
    "fontsDocs",
    gulp.parallel(
      "html:docs",
      "sass:docs",
      "images:docs",
      gulp.series("svgStack:docs", "svgSymbol:docs"),
      "files:docs",
      "js:docs"
    ),
    gulp.parallel("server:docs")
  )
);
