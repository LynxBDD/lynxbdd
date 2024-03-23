// eslint.config.js
// https://github.com/antfu/eslint-config
import antfu from '@antfu/eslint-config';

export default antfu({
	// Enable stylistic formatting rules
	stylistic: true,

	// customize the stylistic rules
	stylistic: {
		'indent': 'tab',
		'semi': true,
		'linebreak-style': 'windows'
	},
	vue: {
		overrides: {
			'vue/component-tags-order': [
				'error',
				{
					order: ['script', 'template', 'style']
				}
			],
			'vue/script-indent': ['off'],
			'vue/html-self-closing': [
				'error',
				{
					html: {
						void: 'any'
					}
				}
			]
		}
	},
	typescript: {
		overrides: {
			'ts/semi': ['error', 'always'],
			'ts/member-delimiter-style': [
				'warn',
				{
					multiline: {
						delimiter: 'semi',
						requireLast: true
					},
					singleline: {
						delimiter: 'semi',
						requireLast: false
					}
				}
			],
			'ts/indent': ['off']
		}
	},
	formatters: {
		/**
		 * Format CSS, LESS, SCSS files, also the `<style>` blocks in Vue
		 * By default uses Prettier
		 */
		css: true,
		/**
		 * Format HTML files
		 * By default uses Prettier
		 */
		html: true,
		/**
		 * Format Markdown files
		 * Supports Prettier and dprint
		 * By default uses Prettier
		 */
		markdown: 'prettier'
	},
	// `.eslintignore` is no longer supported in Flat config, use `ignores` instead
	ignores: [
		'!.gitkeep',
		'.turbo',
		'**/dist/*',
		'!**/dist/.gitkeep'
	]
}, {
	// generic rules
	rules: {
		'arrow-body-style': 'off',
		'style/comma-dangle': ['error', 'never'],
		'prefer-arrow-callback': 'off',
		'no-tabs': ['off'],
		'import/first': 'off',
		'antfu/top-level-function': ['off'],
		'antfu/if-newline': ['off'],
		'node/prefer-global/process': ['error', 'always'],
		'jsonc/indent': ['error', 'tab', {}]
	}
});
