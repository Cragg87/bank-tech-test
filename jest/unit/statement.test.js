const AccountStatement = require('../../lib/statement.js');

describe('Statement', () => {
  it('adds transaction to array', () => {
    const statement = new AccountStatement();
    statement.getTransaction({date: "10/01/2023", deposit: 1000, withdrawal: 0});
    const result = statement.displayTransactionsArray();
    expect(result).toEqual([{"date": "10/01/2023", "deposit": 1000,"withdrawal": 0}]);
  });

  it('calculates balance', () => {
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

  it('adds balance to each array object', () => {
    const statement = new AccountStatement();
    statement.getTransaction({date: "10/01/2023", deposit: 1000, withdrawal: 0});
    statement.getTransaction({date: "13/01/2023", deposit: 2000, withdrawal: 0});
    statement.getTransaction({date: "14/01/2023", deposit: 0, withdrawal: 500});
    statement.getBalance()
    const array = statement.displayTransactionsArray()
    expect(array[2]).toEqual({date: "14/01/2023", deposit: 0, withdrawal: 500, balance: 2500});  
  });

  it('prints statement headings and data', () => {
    const statement = new AccountStatement();  
    statement.getTransaction({date: "10/01/2023", deposit: 1000, withdrawal: 0});
    statement.getTransaction({date: "13/01/2023", deposit: 2000, withdrawal: 0});
    statement.getTransaction({date: "14/01/2023", deposit: 0, withdrawal: 500});
    statement.getBalance();
    expect(statement.printStatement()).toEqual(expect.stringContaining("date || credit || debit || balance"));
    expect(statement.printStatement()).toEqual(expect.stringContaining("14/01/2023 || 0 || 500 || 2500"));
  });
});