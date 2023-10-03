export default {
  build: {
    outDir:  'dist',      // the bundle output directory ... defaults to: dist
    outFile: 'vzual.js',  // the bundled JS files, generating vzual.js (UMD format) -and- vzual.mjs (ES module format) ... defaults to: lib-name.js
    lib: {
      name:  'vzual',        // our library name
      entry: 'src/index.js', // the bundle entry point
    },
    rollupOptions: {
      external: ['socket.io'], // do NOT include external dependencies in our bundle (let consumer know they must install this dependency themselves
      output: {
        format: 'umd', // UMD format, supporting BOTH ES6 (import), and CommonJS (require)
        globals: {
          socketIO: 'Socket.IO', // Map external dependencies to global variables if needed
        },
      },
    },
  },
};
