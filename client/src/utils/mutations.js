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
mutation CreateBottle($position: Int!, $name: String, $type: String, $vintage: Int, $locale: String, $body: String, $notes: String) {
  createBottle(position: $position, name: $name, type: $type, vintage: $vintage, locale: $locale, body: $body, notes: $notes) {
    name
    type
    vintage
    locale
    body
    notes
  }
}
`