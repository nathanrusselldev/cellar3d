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
    _id: ID
    cellarId: Int
    userId: Int
    position: Int
    type: Int
    vintage: Int
    locale: Int
    body: Int
    notes: Int
  }

  type Query {
    users: [User]!
    user(userid: ID!): User
    me: User
  }

  type Mutation {
    createUser( username: String!, email: String!, first_name: String!, last_name: String!, password: String!): User
    login(username: String!, password: String!): Auth

  }


  
`;

module.exports = typeDefs;
