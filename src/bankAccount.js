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
      new this.transaction({deposit: amount, balance: this.balance}, this.type = 'credit')
    );
  };

  withdraw(amount) {
    this.balance -= amount
    this.statement.addTransaction(
      new this.transaction({withdraw: amount, balance: this.balance}, this.type = 'debit')
    );
  };

  printStatement() {
    console.log(this.statement.print());
  };
};

module.exports = BankAccount;