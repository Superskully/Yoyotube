'use strict';

/**
 * Module dependencies
 */

// Public dependencies.
const _ = require('lodash');

var YouTube = require('youtube-node');
var youTube = new YouTube();
youTube.setKey('AIzaSyBkliEwvCl4fyY7cA1pipoFdGNyoqxyOTg');

/**
 * A set of functions called "actions" for `Video`
 */

module.exports = {

  /**
   * Promise to fetch all tests.
   *
   * @return {Promise}
   */

  search: function (params) {
    return new Promise(function(resolve, reject) {
      youTube.search(params.term, 2, function(error, results) {
        if (error) {
          reject(error);
        }
        else {
          resolve(results);
        }
        
      });
    });
  }
  
};
