# Bank Class Design Recipe

## Requirements

1. User can view a bank statement as a table showing;
   - Date:
   - Credit: 
   - Debit:
   - Balance:

2. User can deposit money into their account.

3. User can withdraw money from their account.

4. Deposits and withdrawals are timestamped when they occur

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

  getStatementHeadings() {
    // returns table headings for statement as a string.
  }

  get StatementData() {
    returns transaction objects as rows of strings.
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
    // returns initialized object
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

### 7. Statement table headings are printed

const statement = new AccountStatement();
statement.getStatementHeadings();
expect.stringContaining("date || credit || debit || balance");

### 8. Statement data with balance is printed

const statement = new AccountStatement();
statement.getTransaction({date: 10/01/2023, deposit: 1000, withdrawal: 0});
statement.getTransaction({date: 13/01/2023, deposit: 2000, withdrawal: 0});
statement.getTransaction({date: 14/01/2023, deposit: 0, withdrawal: 500});
statement.getStatementData()
expect.stringContaining("14/01/2023 || || 500.00 || 2500.00");

## Integration tests

### ???. Two transactions are added to Statement array

const statement = new Statement();
const transaction1 = new AccountTransaction();


