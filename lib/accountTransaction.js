class AccountTransaction {
  constructor() {
    // Invites account holder to make a deposit or a withdrawal.
    // Object to which date, deposit and withdrawal can be added.
    this.transaction = {}
  }

  getDate() {
    // adds today's date (automatically generated) to object key 'date'.
    const currentTime = new Date();
    const day = currentTime.getDate();
    const month = currentTime.getMonth() + 1;
    const year = currentTime.getUTCFullYear();
    this.transaction.date = `${day}/${month}/${year}`
  }

  getDeposit(amount) {
    // takes a number input from user and applies to object key 'deposit'.
    this.transaction.deposit = amount
  }

  getWithdrawal(amount) {
    // takes a number input from user and applies to object key 'withdrawal'.
    this.transaction.withdrawal = amount
  }

  displayTransaction() {
    return this.transaction
  }

  addToStatement() {
    // adds object to Statement class array.
  }
}

module.exports = AccountTransaction;