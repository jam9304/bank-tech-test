class Statement {
  constructor () {
    this.header = "Date || Credit || Debit || Balance\n";
    this.transactions = [];
  };

  addTransactions(transaction) {
    this.transactions.push(transaction)
  };

  print() {
    return this.header
  };
};

module.exports = Statement;