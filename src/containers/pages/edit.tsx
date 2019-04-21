import * as React from 'react';
import { compose } from 'react-apollo';
import { withRouter } from 'react-router';

import { withBanks, withBranches, withUpdateBankAccount, withBankAccount } from '../HOCs';

import BankAccountEdit from '../../components/pages/edit';

export default compose(
  withBankAccount,
  withBanks,
  withBranches,
  withUpdateBankAccount,
  withRouter
)((props: any) => {
  const { withBankAccount, withBanks, withBranches, withUpdateBankAccount, updateBankAccount, history } = props;
  if (!withBankAccount || !withBanks || !withBranches || withBankAccount.loading || withBanks.loading || withBranches.loading) return <div>Loading</div>;
  if (withBanks.error || withBranches.error) return <h1>ERROR</h1>;

  const gotoMain = () => {
    history.push('/');
  };

  return <BankAccountEdit
    banks={withBanks.banks}
    branches={withBranches.branches}
    data={withBankAccount.bankAccount}
    loading={withUpdateBankAccount.loading}
    error={withUpdateBankAccount.error}
    add={undefined}
    update={updateBankAccount}
    gotoMain={gotoMain}
  />
});
