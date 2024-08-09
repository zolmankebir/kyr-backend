'use strict';

/**
 * county service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::county.county');
