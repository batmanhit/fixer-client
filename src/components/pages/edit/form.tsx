
import * as React from 'react';
import { FunctionComponent/* , useEffect, useState */ } from 'react';
import { FormFeedback, FormGroup, FormText, Label, Input } from 'reactstrap';

import { Bank, Branch, BankAccountInfo } from '../../../../src/models';

const BankAccountForm: FunctionComponent<{
  banks: Array<Bank>,
  branches: Array<Branch>,
  data: BankAccountInfo,
  fields: Array<string>,
  readOnly: boolean,
  validationErrors: any,
  update: (updates: Partial<BankAccountInfo>) => void
}> = ({ banks, branches, data, fields, readOnly, validationErrors, update }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const value = target.value;
    const name = target.name as any;

    update({
      [name]: value
    });
  };

  return (
    <React.Fragment>
      {
        (!fields || fields.includes('bankId')) &&
        <FormGroup>
          <Label for="bank">Bank Name</Label>
          <Input type="select" name="bankId" id="bank" value={data.bankId} onChange={handleChange} disabled={readOnly} invalid={!!validationErrors['bankId']}>
            <option>Select Bank</option>
            {
              banks.map(bank => (
                <option key={bank.id} value={bank.id}>{bank.name}</option>
              ))
            }
          </Input>
          {
            validationErrors['bankId'] &&
            <FormFeedback>{validationErrors['bankId'][0]}</FormFeedback>
          }
        </FormGroup>
      }
      {
        (!fields || fields.includes('branchId')) &&
        <FormGroup>
          <Label for="branch">Branch Name</Label>
          <Input type="select" name="branchId" id="branch" value={data.branchId} onChange={handleChange} disabled={readOnly} invalid={!!validationErrors['branchId']}>
            <option>Select Branch</option>
            {
              branches.map(branch => (
                <option key={branch.id} value={branch.id}>{branch.name}</option>
              ))
            }
          </Input>
          {
            validationErrors['branchId'] &&
            <FormFeedback>{validationErrors['branchId'][0]}</FormFeedback>
          }
        </FormGroup>
      }
      {
        (!fields || fields.includes('accountHolderName')) &&
        <FormGroup>
          <Label for="accountHolderName">Account holder's Name</Label>
          <Input type="text" name="accountHolderName" id="accountHolderName" value={data.accountHolderName} onChange={handleChange} readOnly={readOnly} invalid={!!validationErrors['accountHolderName']}/>
          {
            validationErrors['accountHolderName'] &&
            <FormFeedback>{validationErrors['accountHolderName'][0]}</FormFeedback>
          }
        </FormGroup>
      }
      {
        (!fields || fields.includes('accountType')) &&
        <FormGroup>
          <Label for="accountType">Account Type</Label>
          <Input type="select" name="accountType" id="accountType" value={data.accountType} onChange={handleChange} disabled={readOnly} invalid={!!validationErrors['accountType']}>
            <option>Select</option>
            <option value="Savings">Savings</option>
            <option value="Checking">Checking</option>
          </Input>
          {
            validationErrors['accountType'] &&
            <FormFeedback>{validationErrors['accountType'][0]}</FormFeedback>
          }
        </FormGroup>
      }
      {
        (!fields || fields.includes('accountNumber')) &&
        <FormGroup>
          <Label for="accountNumber">Account Number</Label>
          <Input type="number" name="accountNumber" id="accountNumber" value={data.accountNumber} onChange={handleChange} readOnly={readOnly} invalid={!!validationErrors['accountNumber']}/>
          {
            validationErrors['accountNumber'] &&
            <FormFeedback>{validationErrors['accountNumber'][0]}</FormFeedback>
          }
          <FormText>Account number should be 7 digits.</FormText>
        </FormGroup>
      }
      {
        (!fields || fields.includes('employeeName')) &&
        <FormGroup>
          <Label for="employeeName">Employee Name</Label>
          <Input type="text" name="employeeName" id="employeeName" value={data.employeeName} onChange={handleChange} readOnly={readOnly} invalid={!!validationErrors['employeeName']}/>
          {
            validationErrors['employeeName'] &&
            <FormFeedback>{validationErrors['employeeName'][0]}</FormFeedback>
          }
        </FormGroup>
      }
      {
        (!fields || fields.includes('employeeNumber')) &&
        <FormGroup>
          <Label for="employeeNumber">Employee Number</Label>
          <Input type="text" name="employeeNumber" id="employeeNumber" value={data.employeeNumber} onChange={handleChange} readOnly={readOnly} invalid={!!validationErrors['employeeNumber']}/>
          {
            validationErrors['employeeNumber'] &&
            <FormFeedback>{validationErrors['employeeNumber'][0]}</FormFeedback>
          }
          <FormText>Account number should be 15 digits.</FormText>
        </FormGroup>
      }
    </React.Fragment>
  )
};

export default BankAccountForm;