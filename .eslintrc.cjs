const typescriptEslintPlugin = require('@typescript-eslint/eslint-plugin')

/** @type {import('@types/eslint').Linter.BaseConfig}*/
module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		tsconfigRootDir: __dirname,
		project: ['./tsconfig.json'],
	},
	plugins: ['@typescript-eslint', 'jest'],
	extends: [
		'eslint:recommended',
		'prettier',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
	],
	rules: {
		'no-console': ['warn'],
	},
	// While we use vitest instead of jest, because of the very similar API, we
	// can still make good use of jest's linting plugin
	settings: {
		jest: {
			version: 28,
		},
	},
	overrides: [
		{
			files: ['*.test.*'],
			rules: {
				// Be extremely permissive about our use of typescript in test files
				...Object.keys(typescriptEslintPlugin.rules).reduce(
					(table, rule) => {
						table[`@typescript-eslint/${rule}`] = ['off']
						return table
					},
					{}
				),
			},
		},
	],
}
