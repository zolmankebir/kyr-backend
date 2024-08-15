'use strict';

/**
 * ambassador router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::ambassador.ambassador');
