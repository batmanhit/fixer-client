import gql from "graphql-tag";

export const DELETE_BANK_MUTATION = gql`
  mutation DeleteBankAccount(
    $id: String!
  ) {
    deleteBankAccount(
      id: $id
    )
  }
`;