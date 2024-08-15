'use strict';

/**
 * ministry service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ministry.ministry');
