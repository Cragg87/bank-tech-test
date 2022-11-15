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

  getBalance() {
    // calculates total balance and returns number as decimal.
  }

  getStatement() {
    // returns array as string with table structure, including headings, object data and balance.
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

  addToStatement() {
    // adds object to Statement class array.
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
...() => {
  expect(() => {
    transaction.getDeposit(100.00));
  }).toThrow(‘Number must be an integer, with no decimal point');
})