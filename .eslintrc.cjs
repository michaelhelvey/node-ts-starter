/** @type {import('@types/eslint').Linter.BaseConfig}*/
module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		tsconfigRootDir: __dirname,
		project: ["./tsconfig.json"],
	},
	plugins: ["@typescript-eslint", "jest"],
	extends: [
		"eslint:recommended",
		"prettier",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
	],
	settings: {
		jest: {
			version: 28,
		},
	},
};
