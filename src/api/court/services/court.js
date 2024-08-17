'use strict';

/**
 * court service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::court.court');
