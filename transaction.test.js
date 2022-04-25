// const { describe } = require('eslint/lib/rule-tester/rule-tester');
// const { it } = require('eslint/lib/rule-tester/rule-tester');
const Transaction = require('./transaction');
const dateMock = require("jest-date-mock");

beforeEach(() => {
  dateMock.advanceTo(new Date(2022, 0, 1, 0, 0, 0))
  transactionOne = new Transaction(10);
});

afterAll(() => {
  dateMock.clear();
});


describe('Transaction', () => {
  it('stores the amount', () => {
    expect(transactionOne.amount).toBe(10);
  });

  it('stores the date', () => {
    expect(transactionOne.date).toStrictEqual(new Date("2022-01-01T00:00:00.000Z"));
  });
});