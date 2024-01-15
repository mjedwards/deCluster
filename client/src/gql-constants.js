import { gql } from "@apollo/client";


// Posts
export const LOGIN_USER = gql`
  mutation login($email_username: String!, $password: String!) {
    login(email_username: $email_username, password: $password) {
      id
      email
      username
      createdAt
      token
    }
  }
`;

export const REGISTER_USER = gql`
  mutation register(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      registerInput: {
        username: $username
        email: $email
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      id
      email
      username
      createdAt
      token
    }
  }
`;

// Queries 


// Mutations