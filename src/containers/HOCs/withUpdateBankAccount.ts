import { ChildDataProps, graphql } from "react-apollo";

import { BankAccount, BankAccountInfo } from '../../models';
import { UPDATE_BANK_MUTATION } from '../../graphql';

type Response = BankAccount;

type InputProps = {
  updateBankAccount: (id: string, bankAccountInfo: BankAccountInfo) => Promise<any>;
};
type Variables = {
  id: string;
  accountHolderName: string;
  employeeName: string;
  accountType: string;
  accountNumber: string;
  employeeNumber: string;
  bankId: string;
  branchId: string;
};

type ChildProps = ChildDataProps<InputProps, Response, Variables>;

export const withUpdateBankAccount = graphql<InputProps, Response, Variables, ChildProps>(UPDATE_BANK_MUTATION, {
  props: ({ data, mutate }) => ({
    data: data!,
    updateBankAccount: (id: string, bankAccountInfo: BankAccountInfo) => {
      return mutate!({
        variables: {
          id,
          ...bankAccountInfo
        }
      });
    },
    withUpdateBankAccount: {
      loading: data ? data.loading : false,
      error: data ? data.error : null
    }
  })
});
