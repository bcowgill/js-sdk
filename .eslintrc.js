/* eslint-disable filenames/match-regex */
module.exports = {
	'env': {
		'browser': true,
		'es6': true,
		'node': true,
		'jest/globals': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:react/all', // or recommended
		'plugin:jsx-a11y/strict', // or recommended
		'plugin:jest/recommended'
	],
	'parserOptions': {
		'ecmaFeatures': {
			'experimentalObjectRestSpread': true,
			'jsx': true
		},
		'sourceType': 'module'
	},
	'plugins': [
		'objects',
		'filenames',
		'react',
		'jsx-a11y',
		'jest'
	],
	'rules': {
		// style - general settins from eslint --init
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'never'
		],
		// style - eslint-plugin-object configuration
		'objects/no-object-properties-first-line': [ 'error' ],
		'objects/no-object-properties-last-line': [ 'error' ],
		'objects/no-object-properties-one-line': [ 'error' ],
		'objects/no-object-property-split': [ 'error' ],
		// eslint-plugin-filenames configuration
		'filenames/no-index': [ 'error' ],
		'filenames/match-regex': [ 'error', '^[a-zA-Z-]+$' ],
		'filenames/match-exported': [ 'error', [ null, 'kebab', 'camel' ] ]
	}
}

