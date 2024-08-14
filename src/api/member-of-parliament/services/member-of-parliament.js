'use strict';

/**
 * member-of-parliament service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::member-of-parliament.member-of-parliament');
