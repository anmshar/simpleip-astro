import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://anmshar.github.io',
  base: '/simpleip-astro/',
  devToolbar: { enabled: false },
  vite: {
    server: {
      allowedHosts: ['host.docker.internal'],
    },
  },
});
