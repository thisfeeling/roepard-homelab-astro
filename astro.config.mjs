// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import vue from '@astrojs/vue';

import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

import partytown from '@astrojs/partytown';

import mdx from '@astrojs/mdx';

import markdoc from '@astrojs/markdoc';

import pdf from 'astro-pdf';

// https://astro.build/config
export default defineConfig({
  prefetch: true, // Enable prefetching of linked pages
  integrations: [react(), vue({
    devtools: true, // Enable Vue Devtools in development mode
    jsx: true, // Enable JSX support
    appEntrypoint: '/src/pages/_app', // Custom app entrypoint
    template: {
      compilerOptions: {
        // Vue compiler options go here
      }
    }
  }), sitemap(), partytown(), mdx(), markdoc()],

  vite: {
    plugins: [tailwindcss()]
  }
});