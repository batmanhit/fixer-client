export const bankAccountFormStepFields = [
  ['bankId', 'branchId'],
  ['accountHolderName', 'accountType', 'accountNumber'],
  ['employeeName', 'employeeNumber'],
];

export const bankAccountFormValidationRules = {
  bankId: 'required',
  branchId: 'required',
  accountHolderName: 'required',
  accountType: 'required|in:Savings,Checking',
  accountNumber: 'required|digits:7',
  employeeName: 'required',
  employeeNumber: 'required|digits:15',
};

export const customBankAccountFormValidationNames = {
  'bankId': 'Bank name',
  'branchId': 'Branch name',
  'accountHolderName': 'Account holder\'s name',
  'accountType': 'Account type',
  'accountNumber': 'Account number',
  'employeeName': 'Employee name',
  'employeeNumber': 'Employee number',
}