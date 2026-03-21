import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    root: 'src',
    base: '', // Empty string or './' makes generated URLs relative
    publicDir: '../public',
    plugins: [
        tailwindcss(),
    ],
    build: {
        outDir: '../dist',
        emptyOutDir: true,
    },
});
