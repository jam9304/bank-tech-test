const BankAccount = require('../src/bankAccount');

// const { describe, it } = require('eslint/lib/rule-tester/rule-tester');

beforeEach(() => {
  accountOne = new BankAccount();
});

describe('Full bank account feature', () => {
  it('allows you to create an account with a balance of 0', () => {
    expect(accountOne.balance).toBe(0);
  });

  it('allows you to deposit and withdraw and check your balance', () => {
    accountOne.deposit(10);
    accountOne.withdraw(6);
    expect(accountOne.balance).toBe(4);
  });

  it('allows you to view your statement which includes all transaction details ever', () => {
    accountOne.deposit(10);
    accountOne.withdraw(6);
    accountOne.deposit(52);
    console.log = jest.fn();
    accountOne.statement.print();
    expect(console.log).toHaveBeenCalledWith(
      'Date || Credit || Debit || Balance\n' +
    '26/04/2022 || 10 ||  || 10\n' +
    '26/04/2022 ||  || 6 || 4\n' +
    '26/04/2022 || 52 ||  || 56\n')
  });
});

