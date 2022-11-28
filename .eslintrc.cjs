/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
	root: true,
	"extends": [
		"plugin:vue/vue3-essential",
		"eslint:recommended",
		"@vue/eslint-config-typescript"
	],
	parserOptions: {
		ecmaVersion: "latest"
	},
	rules: {
		"semi": ["error", "always"],
		"quotes": ["error", "double"],
	},
	// "@typescript-eslint/member-delimiter-style": [
	// 	"error",
	// 	{
	// 		"multiline": {
	// 			"delimiter": "semi",
	// 			"requireLast": true
	// 		},
	// 		"singleline": {
	// 			"delimiter": "semi",
	// 			"requireLast": false
	// 		}
	// 	}
	// ]
};
