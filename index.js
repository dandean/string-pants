;(function() {
  'use strict';


  /**
   * String#camel() -> String
   *
   * Converts the string to camel case.
  **/
  function camel() {
    // https://github.com/sstephenson/prototype/blob/1fb9728/src/lang/string.js#L560
    return this.getWords().join(' ').replace(/\s+(.)?/g, function(match, chr) {
      return chr ? chr.toUpperCase() : '';
    });
  }

  /**
   * String#dash() -> String
   *
   * Converts the string to dash-format.
  **/
  function dash() {
    return this.getWords().join('-');
  }

  /**
   * String#underscore() -> String
   *
   * Converts the string to underscore format.
  **/
  function underscore() {
    return this.getWords().join('_');
  }

  /**
   * String#getWords() -> Arrat
   *
   * Extracts all individual words from a string and returns them as an Array.
  **/
  function getWords() {
    // Some regular expressions from here:
    // https://github.com/sstephenson/prototype/blob/1fb9728/src/lang/string.js#L602
    return this
      // recognize XXx
      .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')
      // recognize x8xX
      .replace(/([a-z\d])([A-Z])/g, '$1 $2')
      .toLowerCase()
      // Replace anything that's not a letter/number with a single space
      .replace(/[^a-z0-9]+/g, ' ')
      .trim()
      .split(' ');
  }

  /**
   * String#capital() -> String
   *
   * Capitalizes the first word of the string and lowercases the rest.
  **/
  function capital() {
    // https://github.com/sstephenson/prototype/blob/1fb9728/src/lang/string.js#L580
    return this.charAt(0).toUpperCase() + this.substring(1).toLowerCase();
  }

  var Extensions = {
    camel: camel,
    dash: dash,
    underscore: underscore,
    getWords: getWords,
    capital: capital
  };

  var Module = {

    /**
     * install([debug]) -> undefined
     * - debug (Boolean): If debug messages should printed when a function is installed on String.prototype.
     *
     * Installs all module functions (except Module.install) on `String.prototype`.
    **/
    install: function(debug) {
      Object.keys(Extensions).forEach(function(method) {
        if (!String.prototype.hasOwnProperty(method)) {
          Object.defineProperty(String.prototype, method, {
            value: Extensions[method],
            enumerable: false, configurable: true, writable: true
          });
          if (debug && console) console.log("Installed String#" + method + "()");
        }
      });
    }
  };

  // Copy methods over to the Module object.
  Object.keys(Extensions).forEach(function(method) {
    Module[method] = function(element, args) {
      return Extensions[method].apply(element, slice.call(arguments, 1));
    }
  });

  if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
    // RequireJS
    define(function() { return Module; });

  } else if (typeof module == 'object') {
    // CommonJS
    module.exports = Module;

  } else if (typeof window == 'object') {
    // No module system
    Module.install();
  }

}(this));
