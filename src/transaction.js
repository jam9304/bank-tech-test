class Transaction {
  constructor ({date = new Date().toLocaleDateString('en-UK'), deposit = "", withdraw = "", balance}) {
    this.deposit = deposit;
    this.withdraw = withdraw;
    this.balance = balance;
    this.date = date;
    Object.freeze(this);
  };
};

module.exports = Transaction;