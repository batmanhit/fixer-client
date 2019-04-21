import gql from "graphql-tag";

export const DELETE_BANKS_MUTATION = gql`
  mutation DeleteBankAccounts(
    $ids: [String!]!
  ) {
    deleteBankAccounts(
      ids: $ids
    )
  }
`;