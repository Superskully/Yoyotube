'use strict';

/**
 * A set of functions called "actions" for `Video`
 */



module.exports = {
  /**
   * Get video entries.
   *
   * @return {Object|Array}
   */

  search: function * () {
    try {
      this.body = yield strapi.services.video.search(this.params)
    } catch (err) {
      this.body = err;
    }
  }
  
};
