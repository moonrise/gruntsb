/*
 * grunt
 * https://github.com/bjjeong/gruntjquery
 *
 * Copyright (c) 2016 bjjeong
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.grunt = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.grunt = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.grunt.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.grunt.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].grunt = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
