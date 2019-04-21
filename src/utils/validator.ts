import * as Validator from 'validatorjs';

export const validateObject = (data: any, rules: any, customNames: any = {}) => {
  const validation = new Validator(data, rules);
  validation.setAttributeNames(customNames);
  validation.check();
  return validation;
};

export const validateObjectPartial = (data: any, rules: any, fields: string[], customNames: any = {}) => {
  const validation = new Validator(data, fields.reduce((accumulator, field) => {
    accumulator[field] = rules[field];
    return accumulator;
  }, {}));
  validation.setAttributeNames(customNames);
  validation.check();
  return validation;
};
