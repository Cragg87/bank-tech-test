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
    // calculates total balance, adds to transaction and returns number as decimal.
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
    const transactions = this.array.map(transaction => {
      transaction.date, 
      transaction.deposit,
      transaction.withdrawal,
      transaction.balance
    });
    console.log(transactions);
  }
}

module.exports = AccountStatement;