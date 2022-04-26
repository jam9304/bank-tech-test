// const { describe } = require('eslint/lib/rule-tester/rule-tester');
// const { it } = require('eslint/lib/rule-tester/rule-tester');
const Statement = require('./statement');

describe('Statement', () => {
  it('prints the statement header', () => {
    const statement = new Statement()
    expect(statement.print()).toBe("Date || Credit || Debit || Balance\n")
  });
});