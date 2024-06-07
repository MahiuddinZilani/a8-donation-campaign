import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true,
  },
})

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   build: {
//     rollupOptions: {
//       output: {
//         manualChunks: {
//           vendor: ['react', 'react-dom']
//         }
//       }
//     }
//   },
//   server: {
//     historyApiFallback: true // Ensure the dev server handles routing correctly
//   },
//   preview: {
//     historyApiFallback: true // Ensure the preview server handles routing correctly
//   }
// });

