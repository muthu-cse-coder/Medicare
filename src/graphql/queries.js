import { gql } from '@apollo/client';

// Get Current User Query
export const GET_ME = gql`
  query Me {
    me {
      id
      name
      email
      phone
      role
      created_at
    }
  }
`;