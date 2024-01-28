import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
  query Countries {
    countries {
      name
      currency
      code
    }
  }
`;


export const getContinent = gql
 `query Countries($key: ID!){
  country(code: $key){ 
    continent{
      name
    }
  }
}`