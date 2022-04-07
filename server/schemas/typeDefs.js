const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Cellar {
    _id: ID
    size: String
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
    users: [User]
    user(username: String!): User
  }

  
`;

module.exports = typeDefs;
