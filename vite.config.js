import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { baseUrl } from './config';
// console.log("env base url:", process.env.VITE_BASE_URL)
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_URL,
  build: {
    target: 'esnext', // Set the target to esnext for modern JavaScript support
    outDir: 'dist',   // Output directory
    rollupOptions: {
      output: {
        format: 'esm', // Set the output format to ES modules
      },
    },
  },
});
