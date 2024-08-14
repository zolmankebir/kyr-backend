'use strict';

/**
 * mca service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mca.mca');
