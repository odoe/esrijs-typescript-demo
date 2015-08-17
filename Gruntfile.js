module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

  grunt.initConfig({
    copy: {
      main: {
        cwd: 'src/',  // set working folder / root to copy
        src: [
          'dojoConfig.js', 'index.html',
          'app/views/**/*.html'
        ],
        dest: 'dist/',    // destination folder
        expand: true      // required when using cwd
      }
    },
    ts: {
      options: {
        target: 'es5',
        module: 'amd',
        sourceMap: true,
        noImplicitAny: true,
        fast: 'never'
      },
      default: {
        src: ['src/app/*.ts', 'src/app/**/*.ts', 'src/app/**/**/*.ts'],
        outDir: 'dist/app'
      },
    },
  });

  grunt.registerTask('default', ['copy', 'ts']);
}