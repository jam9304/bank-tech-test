// const { it } = require('eslint/lib/rule-tester/rule-tester');
const BankAccount = require('./bankAccount');

beforeEach(() => {
  myAccount = new BankAccount();
});

describe('Bank Account', () => {
  it('Shows a balance of 0', () => {
    expect(myAccount.balance).toBe(0);
  });
});