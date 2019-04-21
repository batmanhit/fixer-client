import gql from "graphql-tag";

export const BANK_ACCOUNT_QUERY = gql`
  query getBankAccount($id: String!) {
    bankAccount(id: $id) {
      id
      accountHolderName
      employeeName
      accountType
      accountNumber
      employeeNumber
      bank {
        id
        name
      }
      branch {
        id
        name
      }
      createdAt
      updatedAt
    }
  }
`;