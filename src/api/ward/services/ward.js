'use strict';

/**
 * ward service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ward.ward');
