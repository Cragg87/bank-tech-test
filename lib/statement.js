class AccountStatement {
  constructor() {
   // array to which objects containing date, deposits and withdrawals can be added.
   this.array = []
  }

  getTransaction(transaction) {
    // transaction is an object which gets added to the array above.
    this.array.push(transaction);
  }

  getBalance() {
    // calculates total balance and returns number as decimal.
    let balance = 0
    this.array.forEach(transaction => {
      balance += transaction.deposit;
      balance -= transaction.withdrawal; 
    });
    return balance;
  }

  getStatement() {
    // returns array as string with table structure, including headings, object data and balance.
    return "date || credit || debit || balance";
  }

  displayTransactionsArray() {
    return this.array;
  }
}

module.exports = AccountStatement;