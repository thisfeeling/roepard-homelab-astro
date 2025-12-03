// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

import partytown from '@astrojs/partytown';

import mdx from '@astrojs/mdx';

import markdoc from '@astrojs/markdoc';


// https://astro.build/config
export default defineConfig({
  prefetch: true, // Enable prefetching of linked pages
    integrations: [react(), sitemap(), partytown(), mdx(), markdoc()],

  vite: {
    plugins: [tailwindcss()]
  }
});