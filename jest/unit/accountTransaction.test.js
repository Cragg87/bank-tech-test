const AccountTransaction = require('../../lib/accountTransaction.js');

describe('Depositing into account', () => {
  it('returns "1000"', () => {
    const transaction = new AccountTransaction();
    transaction.getDeposit(1000)
    const result = transaction.displayTransaction().deposit;
    expect(result).toEqual(1000);
  });

  it('returns ""', () => {
    const transaction = new AccountTransaction();
    transaction.getDeposit(0)
    const result = transaction.displayTransaction().deposit;
    expect(result).toEqual("");
  });
});

describe('Withdrawing from account', () => {
  it('returns "1000"', () => {
    const transaction = new AccountTransaction();
    transaction.getWithdrawal(1000)
    const result = transaction.displayTransaction().withdrawal;
    expect(result).toEqual(1000);
  });

  it('returns ""', () => {
    const transaction = new AccountTransaction();
    transaction.getWithdrawal(0)
    const result = transaction.displayTransaction().withdrawal;
    expect(result).toEqual("");
  });
});

describe('Transaction date added to object', () => {
  it('returns date matching regex', () => {
    const transaction = new AccountTransaction();
    const currentTime = new Date();
    const day = currentTime.getDate();
    const month = currentTime.getMonth() + 1;
    const year = currentTime.getUTCFullYear();
    const testResult = `${day}/${month}/${year}`
    transaction.getDate()
    const result = transaction.displayTransaction().date;
    expect(result).toEqual(testResult);
  });
});

describe('User enters invalid value', () => {
  it('should throw an error when nothing entered', () => {
    const transaction = new AccountTransaction();
    expect(() => {
      transaction.getDeposit();
    }).toThrow('You must enter a number');
  });

  it('should throw an error when non-number entered', () => {
    const transaction = new AccountTransaction();
    expect(() => {
      transaction.getWithdrawal("Hello");
    }).toThrow('You must enter a number');
  });
});