module.exports = function (grunt) {
  grunt.initConfig({
    uglify: {
      release:{
        files: {
          'dist/rectangle.js': './rectangle.js',
          'dist/calc.js':'./calc.js'
        }

      }       

    },

      cssmin: {  
              'dist/rectangle.css': 'rectangle.css'
            },

      htmlmin: {
                      options: {
                        collapseWhitespace: true,
                      preserveLineBreaks: false

                      },
                      files: {
                        src: './index.html',
                        dest: 'dist/index.html'

                      }

                    },


  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.registerTask('minify', ['uglify','htmlmin','cssmin']);

};
