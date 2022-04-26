// const { it } = require('eslint/lib/rule-tester/rule-tester');
const BankAccount = require('../src/bankAccount');

beforeEach(() => {
  myAccount = new BankAccount();
});

describe('Bank Account', () => {
  it('Shows a balance of 0', () => {
    expect(myAccount.balance).toBe(0);
  });

  it('allows client to deposit funds', () => {
    myAccount.deposit(10);
    expect(myAccount.balance).toBe(10);
  });

  it('allows client to withdraw funds', () => {
    myAccount.deposit(10);
    myAccount.withdraw(5);
    expect(myAccount.balance).toBe(5);
  });
});