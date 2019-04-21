import { ChildDataProps, graphql } from "react-apollo";

import { BankAccount } from '../../models';
import { DELETE_BANK_MUTATION } from '../../graphql';

type Response = BankAccount;

type InputProps = {
  deleteBankAccount: (id: string) => Promise<any>;
};
type Variables = {
  id: string
};

type ChildProps = ChildDataProps<InputProps, Response, Variables>;

export const withDeleteBankAccount = graphql<InputProps, Response, Variables, ChildProps>(DELETE_BANK_MUTATION, {
  props: ({ data, mutate }) => ({
    data: data!,
    deleteBankAccount: (id: string) => {
      return mutate!({
        variables: {
          id
        }
      });
    },
    withDeleteBankAccount: {
      loading: data ? data.loading : false,
      error: data ? data.error : null
    }
  })
});
