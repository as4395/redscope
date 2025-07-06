import { defineConfig } from 'vite';
import { builtinModules } from 'module';
import path from 'path';
import electron from 'vite-plugin-electron';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: path.join(__dirname, '..', 'src', 'renderer'),
  plugins: [
    react(),
    electron([
      {
        entry: path.join(__dirname, '..', 'src', 'main', 'main.ts'),
        vite: {
          build: {
            sourcemap: true,
            outDir: path.join(__dirname, '..', 'dist', 'main'),
          },
        },
      },
      {
        entry: path.join(__dirname, '..', 'src', 'preload.ts'),
        onstart: 'reload',
        vite: {
          build: {
            sourcemap: true,
            outDir: path.join(__dirname, '..', 'dist', 'preload'),
          },
        },
      },
    ]),
  ],
  resolve: {
    alias: {
      '@': path.join(__dirname, '..', 'src'),
    },
  },
  build: {
    rollupOptions: {
      external: [
        ...builtinModules,
      ],
    },
  },
});
