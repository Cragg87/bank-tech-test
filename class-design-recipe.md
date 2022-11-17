# Bank Class Design Recipe

## Specification

### Requirements
- You should be able to interact with your code via a REPL like IRB or Node. (You don't need to implement a command line interface that takes input from STDIN.)
- Deposits, withdrawal.
- Account statement (date, amount, balance) printing.
- Data can be kept in memory (it doesn't need to be stored to a database or anything).

1. User can view a bank statement as a table showing;
   - Date:
   - Credit: 
   - Debit:
   - Balance:

2. User can deposit money into their account.

3. User can withdraw money from their account.

4. Date of transaction is shown on statement.

### Acceptance criteria
Given a client makes a deposit of 1000 on 10-01-2023
And a deposit of 2000 on 13-01-2023
And a withdrawal of 500 on 14-01-2023
When she prints her bank statement
Then she would see

date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00

## Classes

`JS`

class AccountStatement {
  constructor() {
   // array to which objects containing date, deposits and withdrawals can be added.
   // [{date: (date), deposit: (deposit), withdrawal: (withdrawal)}]
  }

  getTransaction(transaction) {
    // transaction is an object which gets added to the array above.
  }

  displayTransactionsArray() {
    // returns array of transactions
  }

  getBalance() {
    // calculates total balance, apends balance to each transaction and returns number.
  }

  printStatement() {
    // returns string in table format with headings and data.
  }
}

class AccountTransaction {
  constructor() {
    // Invites account holder to make a deposit or a withdrawal.
    // Object to which deposits and withdrawals can be inserted, as well as automatic   
    // timestamp. 
    // {date: (date), deposit: (deposit), withdrawal: (withdrawal)}
  }

  getDate() {
    // adds today's date (automatically generated) to object key 'date'.
  }

  getDeposit() {
    // takes a number input from user and applies to object key 'deposit'.
  }

  getWithdrawal() {
    // takes a number input from user and applies to object key 'withdrawal'.
  }

  displayTransaction() {
    // returns object
  }
}

`JS`

## Examples (Transaction unit tests)

### 1. User can deposit into account

const transaction = new AccountTransaction();
transaction.getDeposit(1000)
const result = transaction.displayTransaction().deposit;
expect(result).toEqual(1000);

### 2. User can withdraw from account

const transaction = new AccountTransaction();
transaction.getWithdrawal(1000)
const result = transaction.displayTransaction().withdrawal;
expect(result).toEqual(1000);

### 3. Object includes date of transaction.

const transaction = new AccountTransaction();
const currentTime = new Date();
const day = currentTime.getDate();
const month = currentTime.getMonth() + 1;
const year = currentTime.getUTCFullYear();
const testResult = `${day}/${month}/${year}`
transaction.getDate()
const result = transaction.displayTransaction().date;
expect(result).toEqual(testResult);

### 4. User enters invalid value

const transaction = new AccountTransaction();
  expect(() => {
    transaction.getDeposit();
  }).toThrow('You must enter a number');

## Statement unit tests

### 5. Transaction is added

const statement = new AccountStatement();
statement.getTransaction({date: 10/01/2023, deposit: 1000, withdrawal: 0});
const result = statement.displayTransactionsArray();
expect(result).toEqual([{date: 10/01/2023, deposit: 1000, withdrawal: 0}]);

### 6. Balance is calculated

const statement = new AccountStatement();
statement.getTransaction({date: 10/01/2023, deposit: 1000, withdrawal: 0});
statement.getTransaction({date: 13/01/2023, deposit: 2000, withdrawal: 0});
expect(statement.getBalance).toEqual(3000);

### 7. Statement table with headings and data is printed

const statement = new AccountStatement();  
statement.getTransaction({date: "10/01/2023", deposit: 1000, withdrawal: ""});
statement.getTransaction({date: "13/01/2023", deposit: 2000, withdrawal: ""});
statement.getTransaction({date: "14/01/2023", deposit: "", withdrawal: 500});
statement.getBalance();
expect(statement.printStatement()).toEqual(expect.stringContaining("date || credit || debit || balance"));
expect(statement.printStatement()).toEqual(expect.stringContaining("14/01/2023 ||  || 500 || 2500"));

## Integration tests

### 8. Transaction is added to Statement array from AccountTransaction class

const statement = new Statement();
const transaction1 = new AccountTransaction();
transaction1.getDate();
transaction1.getDeposit(1000);
transaction1.getWithdrawal(0);
statement.getTransaction(transaction1.displayTransaction());
const result = statement.displayTransactionsArray();
expect(result[0]).toEqual(expect.objectContaining({
        deposit: 1000, 
        withdrawal: 0
    }));

### 9. Statement data with balance is returned

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
      deposit: 0, 
      withdrawal: 500,
      balance: 500
    }));



