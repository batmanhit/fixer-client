import { Bank } from './bank';
import { Branch } from './branch';

export interface BankAccount {
  id: string;
  accountHolderName: string;
  employeeName: string;
  accountType: string;
  accountNumber: string;
  employeeNumber: string;
  bank: Bank;
  branch: Branch;
  createdAt: Date;
  updatedAt: Date;
};

export interface BankAccountInfo {
  accountHolderName: string;
  employeeName: string;
  accountType: string;
  accountNumber: string;
  employeeNumber: string;
  bankId: string;
  branchId: string;
};

export const convertFromBankAccountToInfo = (bankAccount: BankAccount): BankAccountInfo => {
  return {
    accountHolderName: bankAccount.accountHolderName,
    employeeName: bankAccount.employeeName,
    accountType: bankAccount.accountType,
    accountNumber: bankAccount.accountNumber,
    employeeNumber: bankAccount.employeeNumber,
    bankId: bankAccount.bank.id,
    branchId: bankAccount.branch.id
  }
}