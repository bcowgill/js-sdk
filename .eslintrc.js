/* eslint-disable filenames/match-regex */
module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
		'jest/globals': true,
	},
	extends: [
		'eslint:recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:react/all', // or recommended
		'plugin:jsx-a11y/strict', // or recommended
		'plugin:jest/recommended',
	],
	parserOptions: {
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			jsx: true,
		},
		sourceType: 'module',
	},
	plugins: ['objects', 'filenames', 'react', 'jsx-a11y', 'jest'],
	// ESLINT rules https://eslint.org/docs/rules/
	rules: {
		// style - general settings from eslint --init
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
		// style - eslint-plugin-object configuration
		'objects/no-object-properties-first-line': ['error'],
		'objects/no-object-properties-last-line': ['error'],
		'objects/no-object-properties-one-line': ['error'],
		'objects/no-object-property-split': ['error'],
		// eslint-plugin-filenames configuration
		'filenames/no-index': ['error'],
		'filenames/match-regex': ['error', '^[a-zA-Z-]+$'],
		'filenames/match-exported': ['error', [null, 'kebab', 'camel']],
		// Possible Errors - These rules relate to possible syntax or logic errors in JavaScript code:
		'no-console': ['error', { allow: ['warn', 'error'] }],
		'no-await-in-loop': 'error',
		'no-compare-neg-zero': 'error',
		// ...
		// Best Practices - These rules relate to better ways of doing things to help you avoid problems:
		'accessor-pairs': 'error',
		'array-callback-return': 'error',
		'block-scoped-var': 'error',
		'class-methods-use-this': 'error',
		complexity: ['error', { max: 8 }],
		'consistent-return': 'error',
		curly: 'error',
		'default-case': 'error',
		'dot-location': ['error', 'property'],
		'dot-notation': ['error', { allowKeywords: false }],
	},
}
