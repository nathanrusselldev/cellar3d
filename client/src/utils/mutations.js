import { gql } from '@apollo/client'


export const ADD_USER = gql`
mutation createUser($username: String!, $email: String!, $firstName: String!, $lastName: String!, $password: String!) {
    createUser(username: $username, email: $email, first_name: $firstName, last_name: $lastName, password: $password) {
        user {
            id
        username
        email
        first_name
        last_name 
        }
        token
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

export const CREATE_BOTTLE = gql`
mutation CreateBottle($cellarId: ID!, $userId: ID!, $position: Int!, $name: String, $type: Int, $vintage: Int, $locale: Int, $body: String, $notes: String) {
  createBottle(cellarId: $cellarId, userId: $userId, position: $position, name: $name, type: $type, vintage: $vintage, locale: $locale, body: $body, notes: $notes) {
    name
    type
    vintage
    locale
    body
    notes
  }
}
`