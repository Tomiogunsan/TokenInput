import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc';


const peerDependencies = [
  'type',
  'main',
  'module',
  'types',
  'files',
  'scripts'
]

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "InputToken",
      fileName: (format) => `index.${format}.js`,
      formats: ["cjs", "es"],
    },
    rollupOptions: {
      external: peerDependencies
    },
    sourcemap: true,
    emptyOutDir: true,
  },
});
