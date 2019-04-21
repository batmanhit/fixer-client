import { ChildDataProps, graphql } from "react-apollo";

import { BankAccount } from '../../models';
import { BANK_ACCOUNTS_QUERY } from '../../graphql';

type Response = {
  bankAccounts: {
    rows: Array<BankAccount>;
  }
};

type ChildProps = ChildDataProps<{}, Response, {}>;

export const withBankAccounts = graphql<{}, Response, {}, ChildProps>(BANK_ACCOUNTS_QUERY, {
  props: (props) => ({
    data: props.data!,
    withBankAccounts: {
      ...props.data!
    }
  })
});
