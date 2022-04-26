// const { describe } = require('eslint/lib/rule-tester/rule-tester');
// const { it } = require('eslint/lib/rule-tester/rule-tester');
const Transaction = require('./transaction');
const dateMock = require("jest-date-mock");

beforeEach(() => {
  dateMock.advanceTo(new Date(2022, 0, 1, 0, 0, 0))
  transactionOne = new Transaction({deposit: 10});
});

afterAll(() => {
  dateMock.clear();
});


describe('Transaction', () => {
  it('stores the deposit', () => {
    expect(transactionOne.deposit).toBe(10);
  });

  it('stores the date', () => {
    expect(transactionOne.date).toStrictEqual("01/01/2022");
  });

  it('cannot be changed after it has been constructed', () => {
    transactionOne.deposit = 100;
    expect(transactionOne.deposit).toBe(10);
    //Can still be changed if you overwrite the whole transaction but the individual parts after construction cannot be
  });
});