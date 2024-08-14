'use strict';

/**
 * mp service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mp.mp');
