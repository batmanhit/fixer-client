import gql from "graphql-tag";

export const ADD_BANK_MUTATION = gql`
  mutation AddBankAccount(
    $accountHolderName: String!
    $employeeName: String!
    $accountType: String!
    $accountNumber: String!
    $employeeNumber: String!
    $bankId: String!
    $branchId: String!
  ) {
    createBankAccount(
      accountHolderName: $accountHolderName
      employeeName: $employeeName
      accountType: $accountType
      accountNumber: $accountNumber
      employeeNumber: $employeeNumber
      bankId: $bankId
      branchId: $branchId
    ) {
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