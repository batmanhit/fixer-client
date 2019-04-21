import gql from "graphql-tag";

export const BANKS_QUERY = gql`
  query listBanks {
    banks {
      id
      name
    }
  }
`;