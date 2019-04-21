import * as React from 'react';
import { compose } from 'react-apollo';
import { withRouter } from 'react-router';

import { withBanks, withBranches, withCreateBankAccount } from '../HOCs';

import BankAccountEdit from '../../components/pages/edit';

export default compose(
  withBanks,
  withBranches,
  withCreateBankAccount,
  withRouter
)((props: any) => {
  const { withBanks, withBranches, withCreateBankAccount, addBankAccount, history } = props;
  if (!withBanks || !withBranches || withBanks.loading || withBranches.loading) return <div>Loading</div>;
  if (withBanks.error || withBranches.error) return <h1>ERROR</h1>;

  const gotoMain = () => {
    history.push('/');
  };

  return <BankAccountEdit
    banks={withBanks.banks}
    branches={withBranches.branches}
    data={undefined}
    loading={withCreateBankAccount.loading}
    error={withCreateBankAccount.error}
    add={addBankAccount}
    update={undefined}
    gotoMain={gotoMain}
  />
});
