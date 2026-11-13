import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { readFileSync } from 'node:fs';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), {
      name: 'publish-reiki-symbol-images',
      apply: 'build' as const,
      generateBundle() {
        // Original source files contain JPEG bytes despite their .png filenames.
        for (const name of ['CKR', 'SHK', 'HSZSN']) {
          this.emitFile({
            type: 'asset',
            fileName: `assets/${name}.jpg`,
            source: readFileSync(path.resolve(__dirname, `src/assets/images/${name}.png`)),
          });
        }
      },
    }],
    build: {
      rollupOptions: {
        output: {
          // Preserve stable URLs for imported images (e.g. /assets/CKR.png).
          assetFileNames: (assetInfo) => {
            const name = assetInfo.name || '';
            if (/\.(png|jpe?g|gif|webp|svg)$/i.test(name)) {
              return 'assets/[name][extname]';
            }
            return 'assets/[name]-[hash][extname]';
          },
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
