module.exports = function (grunt) {
  grunt.initConfig({
    // this is the task that will let you know your sytax mistakes
    jshint:{
      all:["scripts.js"]
    },
    // this is the task that concat all the js files
    concat:{
      dist:{
        src: "**.js",
        dest: "all.js"
      }
    },
    // this is the task that make everything ugly
    uglify:{
      src: "all.js",
      dest: "all/grr.min.js"
    }
  });

  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-uglify");

  grunt.registerTask("default", ["jshint", "concat", "uglify"]);
};
