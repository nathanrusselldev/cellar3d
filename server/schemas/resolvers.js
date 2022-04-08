const { AuthenticationError } = require('apollo-server-express');
const { User, Bottle, Cellar } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('bottle');
    },
  },
  Mutation: {
    createUser: async (parent, args, context, info) => {
      const user = await User.create(args);
      const cellar = await Cellar.create({userId: user.id, })
      const token = signToken(user);
      return await User.findByPk (user.id, {include: [{model: Cellar}]})
    },
    login: async (parent, {username, password}) => {
      const user = await User.findOne({ username })

      if(!user) {
        throw new AuthenticationError('Incorrect username or password.')
      }
      const correctPassword = await user.isCorrectPassword(password)
      if(!correctPassword) {
        throw new AuthenticationError('Incorrect username or password.');
      }
      const token = signToken(user);
      return {token, user}
    }
  }
}

module.exports = resolvers;
