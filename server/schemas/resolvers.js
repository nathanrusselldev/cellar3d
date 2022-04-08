const { AuthenticationError } = require('apollo-server-express');
const { User, Bottle, Cellar } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('bottle');
    },
    me: async (parent, args, context) => {
      if(context.user) {
        return User.findOne({id: context.user.id})
      }
    }
  },
  Mutation: {
    createUser: async (parent, args, context, info) => {
      const user = await User.create(args);
      const cellar = await Cellar.create({userId: user.id, })
      const token = signToken(user);
      return {user: await User.findByPk (user.id, {include: [{model: Cellar}]}), token}
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
    },
    createBottle: async(parent, args) => {
      const newbottle = await Bottle.create(args)
      return newbottle
    }
  }
}

module.exports = resolvers;
