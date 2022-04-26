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
      new this.transaction({deposit: amount, balance: this.balance})
    );
  };

  withdraw(amount) {
    this.balance -= amount
    this.statement.addTransaction(
      new this.transaction({withdraw: amount, balance: this.balance})
    );
  };
};

module.exports = BankAccount;