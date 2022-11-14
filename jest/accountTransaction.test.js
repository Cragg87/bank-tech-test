const AccountTransaction = require('../lib/accountTransaction.js');

describe('Depositing into account', () => {
  it('returns "1000"', () => {

  const transaction = new AccountTransaction();
  transaction.getDeposit(1000)
  const result = transaction.displayTransaction().deposit;
  expect(result).toEqual(1000);
  });
});