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
  type Mutation {
    createUser( username: String!, email: String!, first_name: String!, last_name: String!, password: String!): User

    login(username: String!, password: String!): User
  }


  
`;

module.exports = typeDefs;
