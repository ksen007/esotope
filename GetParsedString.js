(function () {
    module.exports = function getParsedString(code) {
        var acorn = require('acorn');
        var esotope = require('./esotope');

        var ast = acorn.parse(code, {locations: true, ecmaVersion: 6});

        var newCode = esotope.generate(ast, {comment: false});
        return newCode;
    };

    if (require.main === module) {
        var fs = require('fs');
        var code = fs.readFileSync(process.argv[2], "utf8");
        console.log(getParsedString(code));
    }
}());