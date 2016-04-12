'use strict';

/**
 * Module dependencies
 */

// Public dependencies.
const _ = require('lodash');

var request = require('request');
var baseUrl = "https://www.googleapis.com/youtube/v3"
var youtubeApiKey = "AIzaSyBkliEwvCl4fyY7cA1pipoFdGNyoqxyOTg";

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
      var url = baseUrl + "/search?part=snippet&publishAfter=2016-04-05T00:00:00Z&safeSearch=none&maxResults=12&regionCode=RU&order=date&q=" + params.term + "&type=video&key=" + youtubeApiKey;

      request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          resolve(body);
        } else {
          reject(body);
        }
      })
    });
  },

  // _buildUrl: function (base, params, key) {

  // }

};
