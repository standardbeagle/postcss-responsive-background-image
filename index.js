var postcss = require('postcss');

module.exports = postcss.plugin('postcss-responsive-background', function (opts) {
    opts = opts || {};

    // Work with options here

    return function (css, result) {

        // Transform CSS AST here

    };
});
