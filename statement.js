class Statement {
  constructor () {
    this.header = "Date || Credit || Debit || Balance\n";
  };

  print() {
    return this.header
  }
};

module.exports = Statement;