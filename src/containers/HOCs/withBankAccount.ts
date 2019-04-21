import { ChildDataProps, graphql } from "react-apollo";

import { BankAccount } from '../../models';
import { BANK_ACCOUNT_QUERY } from '../../graphql';

type Props = {
  match: {
    params: {
      id: string;
    }
  };
};

type Response = {
  bankAccount: BankAccount;
};

type Variables = {
  id: string;
};

type ChildProps = ChildDataProps<Props, Response, Variables>;

export const withBankAccount = graphql<Props, Response, Variables, ChildProps>(BANK_ACCOUNT_QUERY, {
  options: (props) => ({
    variables: {
      id: props.match.params.id
    }
  }),
  props: (props) => ({
    data: props.data!,
    match: props.ownProps.match,
    withBankAccount: {
      ...props.data!
    }
  })
});
