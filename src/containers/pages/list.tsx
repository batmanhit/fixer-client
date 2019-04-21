import * as React from 'react';
import { compose } from 'react-apollo';

import List from '../../components/pages/list';
import { withBankAccounts } from '../HOCs';
import { withRouter } from 'react-router';
import { withDeleteBankAccount } from '../HOCs/withDeleteBankAccount';

export default compose(
  withBankAccounts,
  withRouter,
  withDeleteBankAccount
)((props: any) => {
  let { withBankAccounts, deleteBankAccount, history } = props;
  if (!withBankAccounts || withBankAccounts.loading) return <div>Loading</div>;
  if (!withBankAccounts || withBankAccounts.error) return <h1>ERROR</h1>;

  const onUpdateItem = (id: string) => {
    history.push(`/${id}`);
  };
  const onDeleteItem = (id: string) => {
    deleteBankAccount(id).then(() => {
      withBankAccounts.refetch();
    });
  };

  return (
    <List
      data={withBankAccounts.bankAccounts.rows}
      onUpdateItem={onUpdateItem}
      onDeleteItem={onDeleteItem}
    />
  );
});