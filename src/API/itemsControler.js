import { client } from './client'
import { gql } from '@apollo/client'

const Get_All_Items_Query = `{
  category {
    products {
      name
      inStock
      gallery
      description
      category
      attributes{
        id
        name
        type
        items {
          displayValue
          value
          id
        }
      }
      prices {
        amount
        currency
      }
      inStock
    }
  }
}
`
function getAllItems() {
    return client
        .query({
            query: gql`
                ${Get_All_Items_Query}
            `,
        })
        .then(getData)
        .then(({ category }) => category.products)
}
function getData(response) {
    return response.data
}
export { getAllItems }
