import gql from "graphql-tag";

export const BANK_ACCOUNTS_QUERY = gql`
  query listBankAccounts {
    bankAccounts {
      rows {
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
  }
`;