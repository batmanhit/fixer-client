import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { bankAccountFormStepFields } from '../../../../src/constants';
import { Bank, Branch, BankAccountInfo } from '../../../../src/models';

import BankAccountForm from './form';
import { FormGroup, Input } from 'reactstrap';

describe('BankAccount Form test', () => {
  const mockBanks: Array<Bank> = [
    {
      id: '1',
      name: 'Bank1'
    },
    {
      id: '2',
      name: 'Bank2'
    }
  ];

  const mockBranches: Array<Branch> = [
    {
      id: '1',
      name: 'Branch1'
    },
    {
      id: '2',
      name: 'Branch2'
    }
  ];

  const data: BankAccountInfo = {
    accountHolderName: '',
    employeeName: '',
    accountType: '',
    accountNumber: '',
    employeeNumber: '',
    bankId: '',
    branchId: ''
  };

  test('First step form should show up properly', () => {
    const fields = bankAccountFormStepFields[0];

    const onUpdate = jest.fn();
    const testElement: JSX.Element = <BankAccountForm
      banks={mockBanks}
      branches={mockBranches}
      data={data}
      fields={fields}
      readOnly={false}
      validationErrors={{}}
      update={onUpdate}
    />;

    const wrapper: ShallowWrapper = shallow(testElement);
    expect(wrapper.find(FormGroup).length).toBe(fields.length);
    for (let i = 0; i < fields.length; i++) {
      expect(wrapper.find(FormGroup).at(i).find(Input).prop('name')).toBe(fields[i]);
      expect(wrapper.find(FormGroup).at(i).find(Input).prop('value')).toBe(data[fields[i]]);
    }
    // Bank Id
    const bankInput = wrapper.find(FormGroup).at(0).find(Input);
    bankInput.simulate('change', { target: { value: mockBanks[0].id } })
    expect(onUpdate).toHaveBeenCalledTimes(1);
    // Branch Id
    const branchInput = wrapper.find(FormGroup).at(1).find(Input);
    branchInput.simulate('change', { target: { value: mockBranches[0].id } })
    expect(onUpdate).toHaveBeenCalledTimes(2);
  });

  test('Second step form should show up properly', () => {
    const fields = bankAccountFormStepFields[1];

    const onUpdate = jest.fn();
    const testElement: JSX.Element = <BankAccountForm
      banks={mockBanks}
      branches={mockBranches}
      data={data}
      fields={fields}
      readOnly={false}
      validationErrors={{}}
      update={onUpdate}
    />;

    const wrapper: ShallowWrapper = shallow(testElement);
    expect(wrapper.find(FormGroup).length).toBe(fields.length);
    for (let i = 0; i < fields.length; i++) {
      expect(wrapper.find(FormGroup).at(i).find(Input).prop('name')).toBe(fields[i]);
      expect(wrapper.find(FormGroup).at(i).find(Input).prop('value')).toBe(data[fields[i]]);
    }
    // Account holder's name
    const accountHolderNameInput = wrapper.find(FormGroup).at(0).find(Input);
    accountHolderNameInput.simulate('change', { target: { value: 'test1' } })
    expect(onUpdate).toHaveBeenCalledTimes(1);
    // Account type
    const accountTypeInput = wrapper.find(FormGroup).at(1).find(Input);
    accountTypeInput.simulate('change', { target: { value: 'Savings' } })
    expect(onUpdate).toHaveBeenCalledTimes(2);
    // Account number
    const accountNumberInput = wrapper.find(FormGroup).at(1).find(Input);
    accountNumberInput.simulate('change', { target: { value: '1234567' } })
    expect(onUpdate).toHaveBeenCalledTimes(3);
  });

  test('Third step form should show up properly', () => {
    const fields = bankAccountFormStepFields[2];

    const onUpdate = jest.fn();
    const testElement: JSX.Element = <BankAccountForm
      banks={mockBanks}
      branches={mockBranches}
      data={data}
      fields={fields}
      readOnly={false}
      validationErrors={{}}
      update={onUpdate}
    />;

    const wrapper: ShallowWrapper = shallow(testElement);
    expect(wrapper.find(FormGroup).length).toBe(fields.length);
    for (let i = 0; i < fields.length; i++) {
      expect(wrapper.find(FormGroup).at(i).find(Input).prop('name')).toBe(fields[i]);
      expect(wrapper.find(FormGroup).at(i).find(Input).prop('value')).toBe(data[fields[i]]);
    }
    // Employee name
    const employeeNameInput = wrapper.find(FormGroup).at(0).find(Input);
    employeeNameInput.simulate('change', { target: { value: 'test1' } })
    expect(onUpdate).toHaveBeenCalledTimes(1);
    // Employee number
    const employeeNumberInput = wrapper.find(FormGroup).at(1).find(Input);
    employeeNumberInput.simulate('change', { target: { value: '123456789012345' } })
    expect(onUpdate).toHaveBeenCalledTimes(2);
  });

  test('Last review step form should show up properly', () => {
    const fields: string[] = [
      ...bankAccountFormStepFields[0],
      ...bankAccountFormStepFields[1],
      ...bankAccountFormStepFields[2]
    ];

    const onUpdate = jest.fn();
    const testElement: JSX.Element = <BankAccountForm
      banks={mockBanks}
      branches={mockBranches}
      data={data}
      fields={fields}
      readOnly={true}
      validationErrors={{}}
      update={onUpdate}
    />;
    const wrapper: ShallowWrapper = shallow(testElement);
    
    expect(wrapper.find(FormGroup).length).toBe(fields.length);
    for (let i = 0; i < fields.length; i++) {
      expect(wrapper.find(FormGroup).at(i).find(Input).prop('name')).toBe(fields[i]);
      expect(wrapper.find(FormGroup).at(i).find(Input).prop('value')).toBe(data[fields[i]]);
    }
    expect(wrapper.find(FormGroup).at(0).find(Input).prop('disabled')).toBeTruthy();
    expect(wrapper.find(FormGroup).at(1).find(Input).prop('disabled')).toBeTruthy();
    expect(wrapper.find(FormGroup).at(2).find(Input).prop('readOnly')).toBeTruthy();
    expect(wrapper.find(FormGroup).at(3).find(Input).prop('disabled')).toBeTruthy();
    expect(wrapper.find(FormGroup).at(4).find(Input).prop('readOnly')).toBeTruthy();
    expect(wrapper.find(FormGroup).at(5).find(Input).prop('readOnly')).toBeTruthy();
    expect(wrapper.find(FormGroup).at(6).find(Input).prop('readOnly')).toBeTruthy();
  });
});