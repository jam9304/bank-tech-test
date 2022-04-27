class Transaction {
  constructor ({date = new Date().toLocaleDateString('en-UK'), deposit = null, withdraw = null, balance}, type) {
    this.deposit = deposit;
    this.withdraw = withdraw;
    this.balance = balance;
    this.date = date;
    this.type = type;
    Object.freeze(this);
  };
};

module.exports = Transaction;