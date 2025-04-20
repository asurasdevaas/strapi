'use strict';

/**
 * book-load service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::book-load.book-load');
