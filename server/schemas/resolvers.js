const { AuthenticationError } = require('apollo-server-express');
const { User, Bottle, Cellar } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('bottle');
    },
  },
  Mutation: {
    createUser: async (parent, args, context, info) => {
      const user = await User.create(args); console.log(user)
      const cellar = await Cellar.create({userId: user.id, })
      return await User.findByPk (user.id, {include: [{model: Cellar}]})
    }
  }
}

module.exports = resolvers;
