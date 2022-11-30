import { gql } from '@apollo/client';


// Login user mution 
export const LOGIN_USER = gql`
  mutation login($email: String! $password: String!) {
    login( email: $email password: $password) {
      token user {
        _id
        username
      }
    }
  }
`;


// Sign up user mutation
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// Save book mutation added
export const SAVE_BOOK = gql`
  mutation saveBook($book: BookInput!) {
    saveBook(book: $book) {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;

// Remove book mutation added
export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: ID!) {
        removeBook(bookId: $bookId) {
            _id
            username
            savedBooks {
                bookId
                authors
                image
                link
                title
                description
            }
        }
    }
    `;

    