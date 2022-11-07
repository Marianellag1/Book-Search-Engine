// * `resolvers.js`: Define the query and mutation functionality to work with the Mongoose models.
const { AuthenticationError } = require('apollo-server-express');
// const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {},
    Mutation: {}
};

module.exports = resolvers;