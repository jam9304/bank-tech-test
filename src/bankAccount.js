const Statement = require("./statement");
const Transaction = require("./transaction");

class BankAccount {
  constructor (statement = new Statement(), transaction = Transaction) {
    this.transaction = transaction;
    this.statement = statement;
    this.balance = 0;
  };

  deposit(amount) {
    this.balance += amount
    this.statement.addTransaction(
      new this.transaction({deposit: amount.toFixed(2), balance: this.balance})
    );
  };

  withdraw(amount) {
    this.balance -= amount
    this.statement.addTransaction(
      new this.transaction({withdraw: amount.toFixed(2), balance: this.balance})
    );
  };

  printStatement() {
    console.log(this.statement.print());
  };
};

module.exports = BankAccount;