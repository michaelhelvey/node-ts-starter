module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: ['./tsconfig.json'],
	},
	plugins: ['@typescript-eslint', 'jest'],
	extends: [
		'eslint:recommended',
		'prettier',
		'plugin:@typescript-eslint/recommended',
		'plugin:jest/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
	],
}
