import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                program: resolve(__dirname, 'program/index.html'),
                facilities: resolve(__dirname, 'facilities/index.html'),
                team: resolve(__dirname, 'team/index.html'),
                form: resolve(__dirname, 'form/index.html'),
                contact: resolve(__dirname, 'contact/index.html'),
                konaklama: resolve(__dirname, 'konaklama/index.html'),
                tesekkurler: resolve(__dirname, 'tesekkurler/index.html'),
            },
        },
    },
})
