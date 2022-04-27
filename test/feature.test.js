const BankAccount = require('../src/bankAccount');
const dateMock = require("jest-date-mock");

// const { describe, it } = require('eslint/lib/rule-tester/rule-tester');

beforeEach(() => {
  accountOne = new BankAccount();
  dateMock.advanceTo(new Date(2022, 0, 1, 0, 0, 0))
});

afterAll(() => {
  dateMock.clear();
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
    accountOne.printStatement();
    expect(console.log).toHaveBeenCalledWith(
      'date || credit || debit || balance\n' +
    '01/01/2022 || 10.00 ||  || 10.00\n' +
    '01/01/2022 ||  || 6.00 || 4.00\n' +
    '01/01/2022 || 52.00 ||  || 56.00\n')
  });
});

