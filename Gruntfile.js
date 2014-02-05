module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    cssmin: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      minify: {
        expand: true,
        cwd: '_source/_assets/css',
        src: ['*.css', '!*.min.css'],
        dest: '_source/_assets/css',
        ext: '.min.css'
      }
    },
    shell: {
      generate: {
        command: 'mynt gen -c _source/ _site/',
        options: {
          stdout: true,
          etderr: true
        }
      },
      serve: {
        options: {
          stdout: true,
          etderr: true
        },
        command: 'mynt serve _site/'
      },
      deploy: {
        options: {
          stdout: true,
          etderr: true
        },
        command: 's3cmd sync --add-header='Cache-Control: max-age=31536000' _site/ s3://www.amgifford.com'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('default', ['cssmin']);
  grunt.registerTask('gen', ['shell:generate']);
  grunt.registerTask('serve', ['shell:generate', 'shell:serve']);

};