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
      printStatement += this.sortTransaction(transaction);
    });
    console.log(printStatement);
  };

  sortTransaction(transaction) {
    if (transaction.type === 'credit') {
      return `${transaction.date} || ${transaction.deposit.toFixed(2)} ||  || ${transaction.balance.toFixed(2)}\n`;
    } else {
      return `${transaction.date} ||  || ${transaction.withdraw.toFixed(2)} || ${transaction.balance.toFixed(2)}\n`;
    };
  };
};

module.exports = Statement;