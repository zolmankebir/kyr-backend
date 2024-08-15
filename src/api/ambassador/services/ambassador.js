'use strict';

/**
 * ambassador service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ambassador.ambassador');
