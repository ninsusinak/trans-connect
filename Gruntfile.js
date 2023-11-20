module.exports = function(grunt) {
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
  
      // Minify JavaScript files
      uglify: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        build: {
          src: 'src/js/*.js',
          dest: 'dist/js/script.min.js'
        }
      },
  
      // Minify and concatenate CSS files
      cssmin: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        build: {
          src: 'src/css/*.css',
          dest: 'dist/css/style.min.css'
        }
      },
  
      // Optimize images
      imagemin: {
        dynamic: {
          files: [{
            expand: true,
            cwd: 'src/img/',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'dist/img/'
          }]
        }
      },
  
      // Watch for changes during development
      watch: {
        scripts: {
          files: ['src/js/*.js'],
          tasks: ['uglify'],
          options: {
            spawn: false,
          },
        },
        styles: {
          files: ['src/css/*.css'],
          tasks: ['cssmin'],
          options: {
            spawn: false,
          },
        },
        images: {
          files: ['src/img/**/*.{png,jpg,gif}'],
          tasks: ['imagemin'],
          options: {
            spawn: false,
          },
        },
      }
    });
  
    // Load grunt tasks
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
  
    // Default task(s).
    grunt.registerTask('default', ['uglify', 'cssmin', 'imagemin', 'watch']);
  };