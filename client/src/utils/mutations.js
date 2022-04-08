import { gql } from '@apollo/client'


export const ADD_USER = gql`
mutation createUser($username: String!, $email: String!, $firstName: String!, $lastName: String!, $password: String!) {
    createUser(username: $username, email: $email, first_name: $firstName, last_name: $lastName, password: $password) {
        id
        username
        email
        first_name
        last_name
    }
}
`

export const LOGIN = gql`
mutation login($username:String!, $password:String!) {
    login(username:$username, password:$password) {
        token
        user {
            id
            username
        }
    }
}
`