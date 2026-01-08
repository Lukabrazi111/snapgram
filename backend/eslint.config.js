// @ts-check

import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import path from 'path';

const tsconfigRootDir = path.resolve(process.cwd(), 'tsconfig.json');

export default defineConfig({
  extends: [eslint.configs.recommended, tseslint.configs.recommended],
  plugins: {
    '@typescript-eslint': tseslint.plugin,
  },
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      projectService: true,
      tsconfigRootDir: tsconfigRootDir,
    },
  },
});
