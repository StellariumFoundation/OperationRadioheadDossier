import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(() => {
  return {
    plugins: [
      react(), 
      tailwindcss(),
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['icons/*.webp'],
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,jpeg,webp,opus,woff2,woff,ttf,webmanifest}'],
          maximumFileSizeToCacheInBytes: 10 * 1024 * 1024
        },
        manifest: {
          name: 'Operation Radiohead',
          short_name: 'Radiohead',
          description: 'Secure dossier interface.',
          theme_color: '#09090b',
          background_color: '#09090b',
          display: 'standalone',
          display_override: ['window-controls-overlay', 'standalone'],
          scope: '/',
          start_url: '/',
          lang: 'en',
          orientation: 'any',
          categories: ['security', 'news', 'utilities'],
          icons: [
            {
              src: 'icons/icon-48.webp',
              sizes: '48x48',
              type: 'image/webp',
              purpose: 'any'
            },
            {
              src: 'icons/icon-72.webp',
              sizes: '72x72',
              type: 'image/webp',
              purpose: 'any'
            },
            {
              src: 'icons/icon-96.webp',
              sizes: '96x96',
              type: 'image/webp',
              purpose: 'any'
            },
            {
              src: 'icons/icon-128.webp',
              sizes: '128x128',
              type: 'image/webp',
              purpose: 'any'
            },
            {
              src: 'icons/icon-192.webp',
              sizes: '192x192',
              type: 'image/webp',
              purpose: 'any maskable'
            },
            {
              src: 'icons/icon-256.webp',
              sizes: '256x256',
              type: 'image/webp',
              purpose: 'any'
            },
            {
              src: 'icons/icon-512.webp',
              sizes: '512x512',
              type: 'image/webp',
              purpose: 'any maskable'
            }
          ]
        }
      })
    ],
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
