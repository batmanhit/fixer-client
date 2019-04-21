import * as React from 'react';
import { mount } from 'enzyme';
import { Button, FormFeedback, Input } from 'reactstrap';

import { Bank, Branch, BankAccount } from '../../../../src/models';

import BankAccountEdit from './edit';

describe('BankAccount Create test', () => {
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

  test('Next button to the second form invalid', () => {
    const add = jest.fn();
    const gotoMain = jest.fn();
    const testElement: JSX.Element = <BankAccountEdit
      banks={mockBanks}
      branches={mockBranches}
      data={undefined}
      loading={false}
      error={undefined}
      add={add}
      update={undefined}
      gotoMain={gotoMain}
    />;

    const wrapper = mount(testElement);

    // Check if no Back button and existing Next button
    expect(wrapper.find(Button).html()).toContain('Next');
    wrapper.find(Button).find('button').simulate('click');

    // As the form is invalid, it cannot go through
    expect(wrapper.find(Button).at(0).html()).toContain('Next');
  });

  test('Next button to the second form valid', () => {
    const data: BankAccount = {
      id: '1',
      bank: mockBanks[0],
      branch: mockBranches[0],
      accountHolderName: '',
      employeeName: '',
      accountType: '',
      accountNumber: '',
      employeeNumber: '',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const add = jest.fn();
    const gotoMain = jest.fn();
    const testElement: JSX.Element = <BankAccountEdit
      banks={mockBanks}
      branches={mockBranches}
      data={data}
      loading={false}
      error={undefined}
      add={add}
      update={undefined}
      gotoMain={gotoMain}
    />;

    const wrapper = mount(testElement);

    // Check if no Back button and existing Next button
    expect(wrapper.find(Button).html()).toContain('Next');
    wrapper.find(Button).find('button').simulate('click');

    // As the form is valid, it should go through
    expect(wrapper.find(Button).at(0).html()).toContain('Back');
    expect(wrapper.find(Button).at(1).html()).toContain('Next');
    wrapper.find(Button).at(1).find('button').simulate('click');

    expect(wrapper.find(FormFeedback).length).toBe(3);
  });

  test('Next button to the third form valid', () => {
    const data: BankAccount = {
      id: '1',
      bank: mockBanks[0],
      branch: mockBranches[0],
      accountHolderName: 'test',
      accountType: 'Savings',
      accountNumber: '1234567',
      employeeName: '',
      employeeNumber: '',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const add = jest.fn();
    const gotoMain = jest.fn();
    const testElement: JSX.Element = <BankAccountEdit
      banks={mockBanks}
      branches={mockBranches}
      data={data}
      loading={false}
      error={undefined}
      add={add}
      update={undefined}
      gotoMain={gotoMain}
    />;

    const wrapper = mount(testElement);

    // Check if no Back button and existing Next button
    expect(wrapper.find(Button).html()).toContain('Next');
    wrapper.find(Button).find('button').simulate('click');

    // As the form is valid, it should go through
    expect(wrapper.find(Button).at(0).html()).toContain('Back');
    expect(wrapper.find(Button).at(1).html()).toContain('Next');
    wrapper.find(Button).at(1).find('button').simulate('click');

    expect(wrapper.find(Input).length).toBe(2);
    expect(wrapper.find(Button).at(0).html()).toContain('Back');
    expect(wrapper.find(Button).at(1).html()).toContain('Next');
    wrapper.find(Button).at(1).find('button').simulate('click');

    expect(wrapper.find(Input).length).toBe(2);
  });

  test('Next button to the fourth form valid', () => {
    
    const data: BankAccount = {
      id: '1',
      bank: mockBanks[0],
      branch: mockBranches[0],
      accountHolderName: 'test',
      accountType: 'Savings',
      accountNumber: '1234567',
      employeeName: 'employee',
      employeeNumber: '123456789012345',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const add = jest.fn().mockImplementation(() => Promise.resolve(data));
    const gotoMain = jest.fn();
    const testElement: JSX.Element = <BankAccountEdit
      banks={mockBanks}
      branches={mockBranches}
      data={data}
      loading={false}
      error={undefined}
      add={add}
      update={undefined}
      gotoMain={gotoMain}
    />;

    const wrapper = mount(testElement);

    // Check if no Back button and existing Next button
    expect(wrapper.find(Button).html()).toContain('Next');
    wrapper.find(Button).find('button').simulate('click');

    // As the form is valid, it should go through
    expect(wrapper.find(Button).at(0).html()).toContain('Back');
    expect(wrapper.find(Button).at(1).html()).toContain('Next');
    wrapper.find(Button).at(1).find('button').simulate('click');

    expect(wrapper.find(Input).length).toBe(2);
    expect(wrapper.find(Button).at(0).html()).toContain('Back');
    expect(wrapper.find(Button).at(1).html()).toContain('Next');
    wrapper.find(Button).at(1).find('button').simulate('click');

    expect(wrapper.find(Input).length).toBe(7);
    expect(wrapper.find(Button).at(0).html()).toContain('Back');
    expect(wrapper.find(Button).at(1).html()).toContain('Submit');

    expect(wrapper.find(Input).at(0).find('select').prop('value')).toBe(data.bank.id);
    expect(wrapper.find(Input).at(1).find('select').prop('value')).toBe(data.branch.id);
    expect(wrapper.find(Input).at(2).find('input').prop('value')).toBe(data.accountHolderName);
    expect(wrapper.find(Input).at(3).find('select').prop('value')).toBe(data.accountType);
    expect(wrapper.find(Input).at(4).find('input').prop('value')).toBe(data.accountNumber);
    expect(wrapper.find(Input).at(5).find('input').prop('value')).toBe(data.employeeName);
    expect(wrapper.find(Input).at(6).find('input').prop('value')).toBe(data.employeeNumber);

    wrapper.find(Button).at(1).find('button').simulate('click');
  });
});