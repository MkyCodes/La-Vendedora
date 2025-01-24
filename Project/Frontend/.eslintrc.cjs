// ESLint configuration file
module.exports = {
  // Set the root configuration to avoid inheriting rules from parent directories
  root: true,

  // Define the environment settings
  env: {
    browser: true, // Enable browser global variables
    es2020: true, // Use ECMAScript 2020 features
  },

  // Extend recommended ESLint configurations and plugins
  extends: [
    'eslint:recommended', // Use ESLint's recommended rules
    'plugin:react/recommended', // Add recommended React rules
    'plugin:react/jsx-runtime', // Support for the new JSX runtime
    'plugin:react-hooks/recommended', // Add recommended React Hooks rules
  ],

  // Specify files and directories to ignore
  ignorePatterns: ['dist', '.eslintrc.cjs'],

  // Configure parser options
  parserOptions: {
    ecmaVersion: 'latest', // Use the latest ECMAScript version
    sourceType: 'module', // Use ES modules
  },

  // Define settings for React
  settings: {
    react: {
      version: '18.2', // Specify the React version
    },
  },

  // Add ESLint plugins
  plugins: ['react-refresh'], // Enable React Refresh plugin

  // Customize ESLint rules
  rules: {
    'react/jsx-no-target-blank': 'off', // Disable the rule for target="_blank" in JSX
    'react-refresh/only-export-components': [
      'warn', // Warn if non-component exports are found
      { allowConstantExport: true }, // Allow constant exports
    ],
  },
};