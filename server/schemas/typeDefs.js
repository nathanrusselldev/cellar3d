const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID
    username: String
    email: String
    first_name: String
    last_name: String
    cellar: Cellar
    bottles: [Bottle]
  }

  type Cellar {
    id: ID
    size: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Bottle {
    id: ID
    cellarId: Int
    userId: Int
    name: String
    position: Int
    type: String
    vintage: String
    locale: String
    body: String
    notes: String
  }

  type Query {
    users: [User]!
    user(userid: ID!): User
    me: User
    bottles: [Bottle]
    cellar: Cellar
  }

  type Mutation {
    # User Routes
    createUser( username: String!, email: String!, first_name: String!, last_name: String!, password: String!): Auth,
    login(username: String!, password: String!): Auth,
    # Cellar Routes
    createBottle(name: String,  position: Int!, type: String, vintage: Int, locale: String, body: String, notes: String): Bottle
  } 
`;

module.exports = typeDefs;
