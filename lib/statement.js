const AccountTransaction = require('./accountTransaction.js');

class AccountStatement {
  constructor() {
   // array to which objects containing date, deposits and withdrawals can be added.
   this.array = []
  }

  getTransaction(transaction) {
    // transaction is an object which gets added to the array above.
    this.array.push(transaction);
  }

  displayTransactionsArray() {
    return this.array;
  }

  getBalance() {
    // calculates total balance, adds to transaction and returns number.
    let balance = 0
    this.array.forEach(transaction => {
      balance += transaction.deposit;
      balance -= transaction.withdrawal;
      transaction.balance = balance;
    });
    return balance;
  }

  getStatementHeadings() {
    return "date || credit || debit || balance" 
  }

  getStatementData() {
    const newArray = this.array.map(
      transaction => {
      return [ transaction.date,
      transaction.deposit,
      transaction.withdrawal,
      transaction.balance ].join(" || ");
    });
    return newArray.join("\n")
  }
}

module.exports = AccountStatement;