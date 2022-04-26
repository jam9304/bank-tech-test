class Statement {
  constructor () {
    this.header = "Date || Credit || Debit || Balance\n";
    this.transactions = [];
  };

  addTransaction(transaction) {
    this.transactions.push(transaction)
  };

  print() {
    let printStatement = this.header;
    this.transactions.forEach(transaction => {
      printStatement += `${transaction.date} || ${transaction.deposit} || ${transaction.withdraw} || ${transaction.balance}\n`;
    });
    return printStatement;
  };
};

module.exports = Statement;