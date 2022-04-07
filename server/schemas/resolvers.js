const { AuthenticationError } = require('apollo-server-express');
const { User, Bottle, Cellar } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('bottle');
    },
  },
}



module.exports = resolvers;
