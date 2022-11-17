# Bank Tech Test

## My design approach

I began by drawing a very simple diagram (below), concluding that this program should be made up of two classes, one to execute unit transactions, and the other to receive them and generate a bank statement. With this design, multiple transactions can be created and added to a single statement.

  ![Initial diagram](/images/initial-plan.png)

In order to plan and implement a TDD and OO approach, I wrote a [class design recipe](class-design-recipe.md) which detailed the functionality of both classes together with test examples.

My next step was to write the first unit test for the AccountTransaction class and develop the program from there, following the RAG cycle. This resulted in a straightforward design with the followign structure:

1. Instances of the AccountTransaction class are single transactions where the user can:

  - enter a deposit amount
  - enter a withdrawal amount
  - generate today's date

This data is stored within an object.

2. An instance of the AccountStatement class initially constructs with an empty array to which instances of Transaction objects can be added.

3. The `getBalance()` function, when called, calculates the balance after each transaction, adding this figure as a key-value pair to each object. It also returns the current balance.

4. A user can view their statement by calling the `printStatement()` function, which returns a string in the form of a table, with column headings and data:

```js
  date || credit || debit || balance
  14/01/2023 || || 500.00 || 2500.00
  13/01/2023 || 2000.00 || || 3000.00
  10/01/2023 || 1000.00 || || 1000.00
```

## Running tests

To check that tests are all passing, cd to the project directory in your terminal and enter the following:

```js
  // Setup your environment to use node latest version.
  nvm use node
  
  // Install jest "globally" so you can run the `jest` command)
  npm install -g jest
  
  // Run the tests
  jest
```

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
This should look similar to the following:

  ![Screenshot](/images/screenshot.png)

