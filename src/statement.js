class Statement {
  constructor () {
    this.header = "date || credit || debit || balance\n";
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
    console.log(printStatement);
  };
};

module.exports = Statement;