import { templateCompilerOptions } from '@tresjs/core';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  clearScreen: false,

  plugins: [vue({
    ...templateCompilerOptions,
  })],
});
