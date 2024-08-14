'use strict';

/**
 * senator service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::senator.senator');
