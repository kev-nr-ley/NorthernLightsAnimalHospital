import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],


  resolve: {
    alias: [
      { find: "@assets", replacement: "/src/assets" },
      { find: "@navigation", replacement: "/src/navigation"},
      { find: "@components", replacement: "/src/components" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@styles", replacement: "/src/styles" },
      { find: "@sections", replacement: "/src/sections" },
    ],
  },

})
