import { gql } from '@apollo/client'


export const ADD_USER = gql`
mutation Mutation($username: String!, $email: String!, $firstName: String!, $lastName: String!, $password: String!) {
    createUser(username: $username, email: $email, first_name: $firstName, last_name: $lastName, password: $password) {
        id
        username
        email
        first_name
        last_name
    }
}
`