import { ApolloError } from 'apollo-boost';
import * as React from 'react';
import { FunctionComponent, useEffect, useState } from 'react';
import { Button, Col, Container, Form, FormGroup, Alert } from 'reactstrap';

import { bankAccountFormStepFields, bankAccountFormValidationRules, customBankAccountFormValidationNames } from '../../../../src/constants';
import { Bank, Branch, BankAccountInfo, BankAccount } from '../../../../src/models';
import { validateObject, validateObjectPartial } from '../../../../src/utils';

import BankAccountForm from './form';

const BankAccountEdit: FunctionComponent<{
  banks: Array<Bank>,
  branches: Array<Branch>,
  data: BankAccount | undefined,
  loading: boolean,
  error: ApolloError | undefined,
  add: ((bankAccountInfo: BankAccountInfo) => Promise<any>) | undefined,
  update: ((id: String, bankAccountInfo: BankAccountInfo) => Promise<any>) | undefined,
  gotoMain: () => void
}> = ({ banks, branches, data, error, loading, add, update, gotoMain }) => {
  const [formData, setFormData] = useState({
    accountHolderName: '',
    employeeName: '',
    accountType: '',
    accountNumber: '',
    employeeNumber: '',
    bankId: '',
    branchId: ''
  });
  const [validationErrors, setValidationErrors] = useState({});
  const [step, setStep] = useState(0);
  const [showError, setShowError] = useState(false);

  const onUpdate = (updates: Partial<BankAccountInfo>) => {
    setFormData({
      ...formData,
      ...updates
    });
  };

  const onBack = () => {
    setStep(Math.max(step - 1, 0));
  };

  const onNext = () => {
    if (validateForm()) {
      setStep(Math.min(step + 1, 3));
    }
  };

  const onSubmit = () => {
    if (data && update) {
      update(data.id, formData).then(() => {
        gotoMain();  
      });
      return;
    }
    if (!data && add) {
      add(formData).then(() => {
        gotoMain();
      });
    }
  };

  const validateForm = () => {
    let validation;
    if (step < 3) {
      validation = validateObjectPartial(formData, bankAccountFormValidationRules, bankAccountFormStepFields[step], customBankAccountFormValidationNames);
    } else {
      validation = validateObject(formData, bankAccountFormValidationRules, customBankAccountFormValidationNames);
    }

    setValidationErrors(validation.errors.all());
    return validation.passes();
  };

  useEffect(() => {
    setShowError(!!error);
    if (!!error) {
      setTimeout(() => {
        setShowError(false);
      }, 3000);
    }
  }, [error]);

  useEffect(() => {
    if (data) {
      setFormData({
        accountHolderName: data.accountHolderName,
        employeeName: data.employeeName,
        accountType: data.accountType,
        accountNumber: data.accountNumber,
        employeeNumber: data.employeeNumber,
        bankId: data.bank.id,
        branchId: data.branch.id
      });
    }
  }, [data]);

  return (
    <Container fluid={true} className="h-100 px-3 bg-secondary d-flex align-items-center justify-content-center">
      <Col size={12} md={6} className="mb-5">
        { showError && <Alert color="danger">{{error}}</Alert> }
        <Form className="w-100 p-5 bg-white border-dark rounded">
          { /* Step Forms */ }
          <BankAccountForm
            data={formData}
            banks={banks}
            branches={branches}
            fields={bankAccountFormStepFields[step]}
            update={onUpdate}
            validationErrors={validationErrors}
            readOnly={step === 3}
          />

          { /* Buttons */ }
          <FormGroup className="pb-3">
            { step > 0 && <Button className="float-left" disabled={loading} onClick={onBack}>Back</Button> }
            { step < 3 && <Button className="float-right" onClick={onNext}>Next</Button> }
            { step === 3 && <Button className="float-right" disabled={loading} onClick={onSubmit}>Submit</Button> }
          </FormGroup>
        </Form>
      </Col>
    </Container>
  )
};

export default BankAccountEdit;