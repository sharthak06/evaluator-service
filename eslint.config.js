// eslint.config.js (NEW FORMAT for ESLint v9+)
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export default tseslint.config(
  // Base recommended configs
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettier, // Replaces 'plugin:prettier/recommended' and 'prettier'
  
  {
    // File patterns to lint
    files: ['src/**/*.ts', 'src/**/*.tsx', '*.ts'],
    
    // Language options (replaces parser, parserOptions, env)
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        // Node.js globals (replaces env.node)
        console: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        exports: 'writable',
        module: 'writable',
        require: 'readonly',
        global: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
      }
    },
    plugins: {
  '@typescript-eslint': tsPlugin,
  'simple-import-sort': simpleImportSort,
},
    // Your custom rules (same as before)
    rules: {
      'no-var': 'error',
      'semi': ['error', 'always'],
      'indent': ['error', 2, { SwitchCase: 1 }],
      'no-multi-spaces': 'error',
      'space-in-parens': 'error',
      'no-multiple-empty-lines': 'error',
      'prefer-const': 'error',
      "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error"
    },
  },
  
  {
    // Files to ignore
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      '*.js', // If you want to ignore JS files
    ]
  }
);