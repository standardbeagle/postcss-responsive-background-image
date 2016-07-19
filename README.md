# PostCSS Responsive Background [![Build Status][ci-img]][ci]

[PostCSS] plugin that creates smaller copies of a background image according to predefined responsive breakpoints, and generates the correct css in order to save bandwith and memory on small screen devices..

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/andylbrummer/postcss-responsive-background.svg
[ci]:      https://travis-ci.org/andylbrummer/postcss-responsive-background

```css
.foo {
    /* Input example */
}
```

```css
.foo {
  /* Output example */
}
```

## Usage

```js
postcss([ require('postcss-responsive-background') ])
```

See [PostCSS] docs for examples for your environment.
