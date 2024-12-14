import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: '0.0.0.0', // Allow external connections
    port: 5173,      // Use the same port as configured
  },
  preview: {
    host: '0.0.0.0', // For Vite's preview mode
    port: 5173,
  },
});
