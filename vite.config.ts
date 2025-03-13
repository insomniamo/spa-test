import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@base': path.resolve(__dirname, 'src/base'),
      '@icons': path.resolve(__dirname, 'src/icons'),
      '@images': path.resolve(__dirname, 'src/images'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    },
  }
});