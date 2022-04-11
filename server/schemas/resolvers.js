const { AuthenticationError } = require('apollo-server-express');
const { User, Bottle, Cellar } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('bottle');
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ id: context.user.id })
      }
    }
  },
  Mutation: {
    createUser: async (parent, args, context, info) => {
      const user = await User.create(args);
      const cellar = await Cellar.create({ userId: user.id, })
      const token = signToken({ ...user, cellarId: cellar.id });
      return { user: await User.findByPk(user.id, { include: [{ model: Cellar }] }), token }
    },
    login: async (parent, { username, password }) => {
      const user = await User.findOne({
        where: { username },
        include: [{ model: Cellar }]
      })
      console.log(user)
      if (!user) {
        throw new AuthenticationError('Incorrect username or password.')
      }
      const correctPassword = await user.isCorrectPassword(password)
      if (!correctPassword) {
        throw new AuthenticationError('Incorrect username or password.');
      }
      const token = signToken({ ...user, cellarId: user.cellar.id });
      return { token, user }
    },
    createBottle: async (parent, args, context) => {
      const newbottle = await Bottle.create({ ...args, userId: context.user.id, cellarId: context.user.cellarId })
      return newbottle
    }
  }
}

module.exports = resolvers;
