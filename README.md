# Bank Tech Test

## My design approach

I began by drawing a very simple diagram (below), concluding that this program should be made up of two classes, one to execute unit transactions, and the other to receive them and generate a bank statement.

  ![Initial diagram](/images/initial-plan.png)

## Running tests

To check that tests are all passing, cd to the project directory in your terminal and enter `jest`. 

## Running the app

To run the app, cd to the project directory in your terminal and execute the following:

```js
  // Enter into Node REPL in your terminal.
  node

  // Access JS files.
  const Statement = require('./lib/statement.js');
  const Transaction = require('./lib/accountTransaction.js');

  // Create a new instance of a transaction.
  const transaction1 = new Transaction;

  // Generate today's date
  transaction1.getDate();

  // Enter deposit amount (or enter 0 if not making a deposit).
  transaction1.getDeposit(1000);

  // Enter withdrawal amount (or enter 0 if not making a withdrawal).
  transaction1.getWithdrawal(0);

  // Create new instance of statement.
  const statement = new Statement;

  // Import 'transaction1' to statement by passing 'transaction1.displayTransaction' as argument.
  statement.getTransaction(transaction1.diplayTransaction);

  // Calculate the balance after transaction.
  statement.getBalance();

  // Generate statement.
  statement.printStatement();

  // More instances of Transaction (e.g. 'transaction2', etc.) can be added to the statement.
```

