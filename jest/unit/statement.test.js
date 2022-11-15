const AccountStatement = require('../../lib/statement.js');

describe('Statement', () => {
  it('adds transaction to array"', () => {
    const statement = new AccountStatement();
    statement.getTransaction({date: "10/01/2023", deposit: 1000, withdrawal: 0});
    const result = statement.displayTransactionsArray();
    expect(result).toEqual([{"date": "10/01/2023", "deposit": 1000,"withdrawal": 0}]);
  });

  it('calculates balance"', () => {
    const statement = new AccountStatement();
    statement.getTransaction({date: "10/01/2023", deposit: 1000, withdrawal: 0});
    statement.getTransaction({date: "13/01/2023", deposit: 2000, withdrawal: 0});
    expect(statement.getBalance()).toEqual(3000);  
  });

  it('calculates balance including withdrawals', () => {
    const statement = new AccountStatement();
    statement.getTransaction({date: "10/01/2023", deposit: 1000, withdrawal: 0});
    statement.getTransaction({date: "13/01/2023", deposit: 2000, withdrawal: 0});
    statement.getTransaction({date: "14/01/2023", deposit: 0, withdrawal: 500});
    expect(statement.getBalance()).toEqual(2500);  
  });

  it('prints empty statement with table headings', () => {
    const statement = new AccountStatement();
    expect(statement.getStatement()).toEqual(expect.stringContaining("date || credit || debit || balance"));
  });
});