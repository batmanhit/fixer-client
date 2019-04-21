import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { AgGridReact } from 'ag-grid-react/lib/agGridReact';

import { BankAccount } from '../../../../src/models';

import List from './list';

describe('BankAccountsList', () => {
  const mockBankAccounts: Array<BankAccount> = [
    {
      id: '1',
      accountHolderName: 'Test1',
      employeeName: 'Employee1',
      accountType: 'Savings',
      accountNumber: '1234567',
      employeeNumber: '123456789012345',
      bank: {
        id: '1',
        name: 'Bank1'
      },
      branch: {
        id: '1',
        name: 'Branch1'
      },
      createdAt: new Date('2019/04/21 00:00:00'),
      updatedAt: new Date('2019/04/21 00:00:00')
    }, {
      id: '2',
      accountHolderName: 'Test2',
      employeeName: 'Employee2',
      accountType: 'Checking',
      accountNumber: '1234567',
      employeeNumber: '123456789012345',
      bank: {
        id: '2',
        name: 'Bank2'
      },
      branch: {
        id: '2',
        name: 'Branch2'
      },
      createdAt: new Date('2019/04/21 00:00:00'),
      updatedAt: new Date('2019/04/21 00:00:00')
    },
  ];
  const updateItem = jest.fn();
  const deleteItem = jest.fn();
  const testElement: JSX.Element = <List
    data={mockBankAccounts}
    onUpdateItem={updateItem}
    onDeleteItem={deleteItem}
  />;
  const wrapper: ShallowWrapper = shallow(testElement);

  test('snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('render mockBankAccounts correctly', () => {
    const grid = wrapper.find(AgGridReact);
    expect(grid.prop('rowData')).toEqual(mockBankAccounts);
  });
});