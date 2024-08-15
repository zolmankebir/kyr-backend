'use strict';

/**
 * upvote controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::upvote.upvote');
