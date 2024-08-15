'use strict';

/**
 * minister service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::minister.minister');
