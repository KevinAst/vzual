export default {
  build: {
    outDir:  'dist',      // the bundle output directory ... defaults to: dist
    lib: {
      name:  'vzual',        // our library name
      entry: 'src/index.js', // the bundle entry point
      formats: ['es',        // ES6 Bundle:      dist/vzual.mjs      (import)
                'cjs',       // CommonJS Bundle: dist/vzual.cjs      (require)
                'umd'],      // UMD Bundle:      dist/vzual.umd.js   (import)
    },
    rollupOptions: {
      external: ['socket.io'], // do NOT include external dependencies in our bundle (let consumer know they must install this dependency themselves
      output: {
        globals: {
          socketIO: 'Socket.IO', // Map external dependencies to global variables if needed
        },
      },
    },
  },
};
