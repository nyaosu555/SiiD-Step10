import {resolve} from 'path'
import { defineConfig, loadEnv } from 'vite'

export default  defineConfig({

        build: {
            rollupOptions: {
                input: {
                    main: resolve(__dirname, 'index.html'),
                    history: resolve(__dirname, 'history.html'),
                },
            },
        },
})