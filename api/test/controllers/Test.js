'use strict';

/**
 * A set of functions called "actions" for `Test`
 */

module.exports = {
  /**
   * Get test entries.
   *
   * @return {Object|Array}
   */

  find: function * () {
    try {
      this.body = yield strapi.services.test.fetchAll(this.query);
    } catch (err) {
      this.body = err;
    }
  },

  /**
   * Get a specific test.
   *
   * @return {Object|Array}
   */

  findOne: function * () {
    try {
      this.body = yield strapi.services.test.fetch(this.params)
    } catch (err) {
      this.body = err;
    }
  },

  /**
   * Create a/an test entry.
   *
   * @return {Object}
   */

  create: function * () {
    try {
      this.body = yield strapi.services.test.add(this.request.body);
    } catch (err) {
      this.body = err;
    }
  },

  /**
   * Update a/an test entry.
   *
   * @return {Object}
   */

  update: function * () {
    try {
      this.body = yield strapi.services.test.edit(this.params, this.request.body) ;
    } catch (err) {
      this.body = err;
    }
  },

  /**
   * Destroy a/an test entry.
   *
   * @return {Object}
   */

  destroy: function * () {
    try {
      this.body = yield strapi.services.test.remove(this.params);
    } catch (err) {
      this.body = err;
    }
  },

  /**
   * Add relation to a specific test.
   *
   * @return {Object}
   */

  createRelation: function * () {
    try {
      this.body = yield strapi.services.test.addRelation(this.params, this.request.body);
    } catch (err) {
      this.status = 400;
      this.body = err;
    }
  },

  /**
   * Update relation to a specific test.
   *
   * @return {Object}
   */

  updateRelation: function * () {
    try {
      this.body = yield strapi.services.test.editRelation(this.params, this.request.body);
    } catch (err) {
      this.status = 400;
      this.body = err;
    }
  },

  /**
   * Destroy relation to a specific test.
   *
   * @return {Object}
   */

  destroyRelation: function * () {
    try {
      this.body = yield strapi.services.test.removeRelation(this.params, this.request.body);
    } catch (err) {
      this.status = 400;
      this.body = err;
    }
  }
};
