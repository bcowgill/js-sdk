/* eslint-disable filenames/match-regex */
// .prettierrc.js
// in an emergency to fix your package.json formatting:
// ./node_modules/.bin/prettier --config .prettierrc.js --write package.json
module.exports = {
	printWidth: 80,
	useTabs: true,
	tabWidth: 3,
	bracketSpacing: true,
	singleQuote: true,
	semi: false,
	trailingComma: 'all',
	arrowParens: 'always',
	jsxBracketSameLine: false,
	overrides: [
		{
			files: 'package.json',
			parser: 'json',
		},
	],
}
