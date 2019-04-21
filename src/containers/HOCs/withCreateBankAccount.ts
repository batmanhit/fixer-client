import { ChildDataProps, graphql } from "react-apollo";

import { BankAccount, BankAccountInfo } from '../../models';
import { ADD_BANK_MUTATION } from '../../graphql';

type Response = BankAccount;

type InputProps = {
  addBankAccount: (bankAccountInfo: BankAccountInfo) => Promise<any>;
};
type Variables = BankAccountInfo;

type ChildProps = ChildDataProps<InputProps, Response, Variables>;

export const withCreateBankAccount = graphql<InputProps, Response, Variables, ChildProps>(ADD_BANK_MUTATION, {
  props: ({ data, mutate }) => ({
    data: data!,
    addBankAccount: (bankAccountInfo: BankAccountInfo) => {
      return mutate!({
        variables: bankAccountInfo
      });
    },
    withCreateBankAccount: {
      loading: data ? data.loading : false,
      error: data ? data.error : null
    }
  })
});
