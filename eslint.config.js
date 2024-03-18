// eslint.config.js
// https://github.com/antfu/eslint-config
import antfu from '@antfu/eslint-config';

export default antfu({
	// Enable stylistic formatting rules
	stylistic: true,

	// customize the stylistic rules
	stylistic: {
		indent: 'tab',
		semi: true,
	},

	// TypeScript and Vue are auto-detected, you can also explicitly enable them:
	typescript: true,
	vue: true,

	// Disable jsonc
	jsonc: false,

	// `.eslintignore` is no longer supported in Flat config, use `ignores` instead
	ignores: [
		'!.gitkeep',
		'.turbo',
		'**/dist/*',
		'!**/dist/.gitkeep',
	],
});
