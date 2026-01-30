import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import { resolve } from 'path';

export default defineConfig({
  plugins: [preact()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      name: 'AISupportWidget',
      fileName: (format) => `widget.${format}.js`,
    },
    rollupOptions: {
      output: {
        // Ensure CSS is inlined
        assetFileNames: 'widget.[ext]',
      },
    },
    // Target modern browsers for smaller bundle
    target: 'es2020',
    minify: 'esbuild',
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
  },
});
