import { gql } from "@apollo/client";

export const FIND_BOTTLES = gql`
query Bottles {
  bottles {
    cellarId
    userId
    name
    position
    type
    vintage
    locale
    body
    notes
  }
}
`