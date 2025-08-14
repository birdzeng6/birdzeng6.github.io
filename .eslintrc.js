module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:markdown/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['vue', 'markdown'],
  rules: {
    // Customize rules for your project
    'no-console': 'warn',           // Warn on console.log
    'no-unused-vars': 'error',      // Error on unused variables  
    'vue/multi-word-component-names': 'off', // Allow single-word components
    'markdown/no-html': 'off'       // Allow HTML in markdown
  },
  ignorePatterns: [
    '.vitepress/dist/',
    '.vitepress/cache/',
    'node_modules/',
    '*.config.js'
  ],
  overrides: [
    {
      files: ['*.md'],
      parser: 'eslint-plugin-markdown/lib/processor',
      rules: {
        // Special rules for markdown files
        'no-undef': 'off',
        'no-unused-vars': 'off'
      }
    }
  ]
}