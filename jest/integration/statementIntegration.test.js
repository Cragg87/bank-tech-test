const AccountStatement = require('../../lib/statement.js');
const AccountTransaction = require('../../lib/accountTransaction.js');

describe('Statement', () => {
  it('adds transaction to array', () => {
    const statement = new AccountStatement();
    const transaction1 = new AccountTransaction();
    transaction1.getDate();
    transaction1.getDeposit(1000);
    transaction1.getWithdrawal(0);
    statement.getTransaction(transaction1.displayTransaction());
    const result = statement.displayTransactionsArray();
    expect(result[0]).toEqual(expect.objectContaining({
      deposit: 1000, 
      withdrawal: ''
    }));
  });

  it('adds 2 transactions to array', () => {
    const statement = new AccountStatement();
    const transaction1 = new AccountTransaction();
    const transaction2 = new AccountTransaction();
    transaction1.getDate();
    transaction1.getDeposit(1000);
    transaction1.getWithdrawal(0);
    transaction2.getDate();
    transaction2.getDeposit(0);
    transaction2.getWithdrawal(500);
    statement.getTransaction(transaction1.displayTransaction());
    statement.getTransaction(transaction2.displayTransaction());
    const result = statement.displayTransactionsArray();
    expect(result[1]).toEqual(expect.objectContaining({
      deposit: '', 
      withdrawal: 500
    }));
  });

  it('returns statement data object with balance', () => {
    const statement = new AccountStatement();
    const transaction1 = new AccountTransaction();
    const transaction2 = new AccountTransaction();
    transaction1.getDate();
    transaction1.getDeposit(1000);
    transaction1.getWithdrawal(0);
    transaction2.getDate();
    transaction2.getDeposit(0);
    transaction2.getWithdrawal(500);
    statement.getTransaction(transaction1.displayTransaction());
    statement.getTransaction(transaction2.displayTransaction());
    statement.getBalance();
    const result = statement.displayTransactionsArray();
    expect(result[1]).toEqual(expect.objectContaining({
      deposit: '', 
      withdrawal: 500,
      balance: 500
    }));
  });
});
