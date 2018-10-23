# Boostrap reboot import

<a href="https://getbootstrap.com/" rel="nofollow">
    <img src="https://camo.githubusercontent.com/8f12b9c1c1759161b9238fd2cec75fa26aad23e1/68747470733a2f2f676574626f6f7473747261702e636f6d2f646f63732f342e312f6173736574732f6272616e642f626f6f7473747261702d736f6c69642e737667" alt="Bootstrap logo" width="72" height="72" data-canonical-src="https://getbootstrap.com/docs/4.1/assets/brand/bootstrap-solid.svg" style="max-width:100%;">
  </a>

> A modern way to import boostrap reboot

If you were searching a way to integrate boostrap reboot css reset stylesheet in your project easily in your gulp sass workflow. You're at the good place.

## Instalation

```sh
npm install --save boostrap-reboot-import
```

## Make SASS aware of the boostrap reboot path

**import path in your gulp file**

```js
const gulp            = require('gulp');
const sass            = require('gulp-sass');
const reboot       = require("boostrap-reboot-import").includePaths;

gulp.task('css', function () {
    return gulp.src('sass/**/*.{sass,scss}')
        .pipe(sass({ includePaths: [reboot] })
        .pipe(gulp.dest('./dist/css/')
    );
});
```

**_or_ use eyeglass**

```sh
npm install --save-dev eyeglass
```

```js
const gulp      = require('gulp');
const sass      = require('gulp-sass');
const eyeglass  = require("eyeglass");

gulp.task('css', function () {
    return gulp.src('sass/**/*.{sass,scss}')
        .pipe(sass(eyeglass())
        .pipe(gulp.dest('./dist/css/')
    );
});
```

more info @: https://github.com/sass-eyeglass/eyeglass

## Import anywere in your sass/scss
```scss
@import 'boostrap-reboot'
```

**More info**

See https://getbootstrap.com/

