import { defineConfig } from 'vite';


export default defineConfig({
  root: 'public', 
  build: {
    outDir: '../dist',  
    emptyOutDir: true,  
    rollupOptions: {
      input: './public/index.html', 
      output: {
        assetFileNames: 'assets/[name][extname]', 
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
      },
    },
  },
});