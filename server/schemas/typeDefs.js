const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [bookSchema]
  }

  type Bookschama {
    _id: ID
    authors: [String]
    description: String
    bookId: String
    image: String
    link: string
    title: String
  }

  type Auth {
    token: ID
    user: User
  }


  type Query {
    getSingleUser: User
    
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    saveBook(description: String, bookId: String): User
    deleteBook(userId: ID, bookId: String ): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;