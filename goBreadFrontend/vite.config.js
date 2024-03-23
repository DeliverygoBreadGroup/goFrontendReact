import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Ouvir em todas as interfaces de rede
    port: 5173, // Opcional: Definir a porta, se desejar mudar da padrão (3000)
  }
})
