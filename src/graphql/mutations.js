import { gql } from "@apollo/client";

export const REGISTER_MUTATION = gql`
  mutation Register($name: String!, $email: String!, $password: String!, $phone: String!) {
    register(input: { name: $name, email: $email, password: $password, phone: $phone }) {
      token
      user {
        id
        name
        email
        phone
        role
      }
    }
  }
`;

export const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(input: { email: $email, password: $password }) {
      token
      user {
        id
        name
        email
      }
    }
  }
`;
