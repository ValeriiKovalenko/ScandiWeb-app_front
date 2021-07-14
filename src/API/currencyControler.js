import { client } from './client'
import { gql } from '@apollo/client'

export default client
    .query({
        query: gql`
            query GetCurrencies {
                currencies
            }
        `,
    })
    .then(({ data }) => data.currencies)
