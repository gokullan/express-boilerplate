module.exports = {
	env: { 'jest/globals': true, node: true },
	extends: [
		'airbnb-base',
		'plugin:prettier/recommended',
		'plugin:security/recommended',
		'plugin:json/recommended',
		'plugin:jest/recommended',
		'plugin:import/recommended',
	],
	parser: '@typescript-eslint/parser',
	plugins: ['prettier', 'jest'],
	parserOptions: {
		ecmaVersion: 2020,
		project: './tsconfig.json',
	},
	settings: {
		'import/resolver': {
			typescript: {},
		},
	},
	rules: {
		'prettier/prettier': [
			'warn',
			{
				endOfLine: 'lf',
			},
		],
		'import/prefer-default-export': 'off',
		'no-underscore-dangle': [
			'error',
			{
				allow: ['_id'],
			},
		],
		'no-console': 'warn',
		'consistent-return': 'off',
		'no-unused-vars': 'warn',
		'import/extensions': ['warn', { ts: 'never', json: 'never' }],
		'prefer-promise-reject-errors': 'off',
		'import/no-extraneous-dependencies': [
			'error',
			{
				devDependencies: [
					'**/*.test.ts',
					'**/*.spec.ts',
					'**/__tests__/**/*.ts',
					'./scripts/**/*.js',
				],
			},
		],
	},
}
