import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/VRIT-DragForm/', 
  build: {
    outDir: 'dist',
  },
  plugins: [react()]
});

