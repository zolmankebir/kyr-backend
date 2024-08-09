'use strict';

/**
 * constituency service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::constituency.constituency');
