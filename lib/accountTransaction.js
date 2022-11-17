class AccountTransaction {
  constructor() {
    // Object to which date, deposit and withdrawal can be added.
    this.transaction = {}
  }

  getDate() {
    // adds today's date to object key 'date'.
    const currentTime = new Date();
    const day = currentTime.getDate();
    const month = currentTime.getMonth() + 1;
    const year = currentTime.getUTCFullYear();
    this.transaction.date = `${day}/${month}/${year}`
  }

  getDeposit(amount) {
    // takes a number input from user and applies to object key 'deposit'.
    if (isNaN(amount)) {
      throw new Error('You must enter a number.');
    } else if (amount === 0) {
      this.transaction.deposit = "";
    } else {
    this.transaction.deposit = amount;
    }
  }

  getWithdrawal(amount) {
    // takes a number input from user and applies to object key 'withdrawal'.
    if (isNaN(amount)) {
      throw new Error('You must enter a number.');
    } else if (amount === 0) {
      this.transaction.withdrawal = "";
    } else {
      this.transaction.withdrawal = amount;
    };
  };

  displayTransaction() {
    return this.transaction
  };
}

module.exports = AccountTransaction;