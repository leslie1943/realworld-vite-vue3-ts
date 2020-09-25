import { BuildConfig } from 'vite'
const path = require('path')

const config: BuildConfig = {
  base: '',
  assetsDir: 'static',
  alias: {
    '/@/': path.resolve(__dirname, './src'),
    '/@/views': path.resolve(__dirname, './src/views'),
    '/@/components/': path.resolve(__dirname, './src/components'),
    '/@/utils/': path.resolve(__dirname, './src/utils'),
    '/@/api/': path.resolve(__dirname, './src/api'),
  },
}

export default config
