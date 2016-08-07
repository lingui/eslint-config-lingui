module.exports = {
    rules: {
        "brace-style": [1, "1tbs", {"allowSingleLine": true}],

        // Trailing commas makes more beautiful diffs
        "comma-dangle": [2, "only-multiline"],

        // no semicolons and related rules
        "semi": [2, "never"],
        "no-extra-semi": 2,
        "no-unexpected-multiline": 2,

        "curly": [2, "multi-line"],
        "linebreak-style": [2, "unix"],
        "no-empty-pattern": 2,
        "no-negated-in-lhs": 2,
        "no-path-concat": 2,
        "no-undef": 2,
        "no-unreachable": 2,
        "no-unused-vars": 2,
        "no-catch-shadow": 2,
        "no-shadow-restricted-names": 2,
        "no-shadow": 2,
        "no-unused-expressions": 0,
        "strict": [0, "never"],
        "quotes": [2, "double"],
        "valid-jsdoc": 2
    }
}
