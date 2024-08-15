'use strict';

/**
 * ambassador controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::ambassador.ambassador');
