// const { describe } = require('eslint/lib/rule-tester/rule-tester');
// const { it } = require('eslint/lib/rule-tester/rule-tester');
// const { it } = require('eslint/lib/rule-tester/rule-tester');
const Statement = require('./statement');

describe('Statement', () => {
  it('prints the statement header', () => {
    const statement = new Statement()
    expect(statement.print()).toBe("Date || Credit || Debit || Balance\n")
  });

  it('adds transaction to transaction array', () => {
    const statement = new Statement()
    statement.addTransactions({
      Date: "01/01/22",
      Withdraw: "",
      Deposit: "10",
      Balance: "10"
    })
    expect(statement.transactions).toEqual([{"Balance": "10", "Date": "01/01/22", "Deposit": "10", "Withdraw": ""}]);
    statement.addTransactions({
      Date: "02/01/22",
      Withdraw: "",
      Deposit: "10",
      Balance: "20"
    })
    expect(statement.transactions).toEqual([{"Balance": "10", "Date": "01/01/22", "Deposit": "10", "Withdraw": ""}, {"Balance": "20", "Date": "02/01/22", "Deposit": "10", "Withdraw": ""}]);

  });
});