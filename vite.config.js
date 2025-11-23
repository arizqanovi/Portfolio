// ... existing code ...
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'

export default defineConfig({
  base: 'arizqanovi/Portfolio/',
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
      ],
    },
  },
})
// ... existing code ...