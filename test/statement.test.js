// const { describe } = require('eslint/lib/rule-tester/rule-tester');
// const { it } = require('eslint/lib/rule-tester/rule-tester');
// const { it } = require('eslint/lib/rule-tester/rule-tester');
const Statement = require('../src/statement');

describe('Statement', () => {
  it('prints the statement header', () => {
    const statement = new Statement()
    console.log = jest.fn();
    statement.print();
    expect(console.log).toHaveBeenCalledWith("date || credit || debit || balance\n")
  });

  it('adds transaction to transaction array', () => {
    const statement = new Statement()
    statement.addTransaction({
      date: "01/01/22",
      withdraw: "",
      deposit: "10",
      balance: "10"
    })
    expect(statement.transactions).toEqual([{"balance": "10", "date": "01/01/22", "deposit": "10", "withdraw": ""}]);
    statement.addTransaction({
      date: "02/01/22",
      withdraw: "",
      deposit: "10",
      balance: "20"
    })
    expect(statement.transactions).toEqual([{"balance": "10", "date": "01/01/22", "deposit": "10", "withdraw": ""}, {"balance": "20", "date": "02/01/22", "deposit": "10", "withdraw": ""}]);

  });
});