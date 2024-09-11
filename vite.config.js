import { defineConfig } from 'vite';


export default defineConfig({
  root: 'public',  // Корневая директория
  build: {
    outDir: '../dist',  // Куда будет сохранена сборка
    emptyOutDir: true,  // Очистка папки dist перед сборкой
    rollupOptions: {
      input: './public/index.html',  // Входной файл
      output: {
        assetFileNames: 'assets/[name][extname]',  // Все ассеты в одну папку
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
      },
    },
  },
});