import gql from "graphql-tag";

export const UPDATE_BANK_MUTATION = gql`
  mutation UpdateBankAccount(
    $id: String!
    $accountHolderName: String!
    $employeeName: String!
    $accountType: String!
    $accountNumber: String!
    $employeeNumber: String!
    $bankId: String!
    $branchId: String!
  ) {
    updateBankAccount(
      id: $id
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