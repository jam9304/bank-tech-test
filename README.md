# **Bank Tech Test**

<br />

## **Description**

This program is designed to allow the client to:

- Create a bank account
- Deposit and withdraw money from their account
- Print statements with all past transactions and balances
- To hold this information in memory rather than saving it to a database

The code below shows how this program works:

```
[class BankAccount]
> myAccount = new BankAccount()
BankAccount {
  transaction: [class Transaction],
  statement: Statement {
    header: 'Date || Credit || Debit || Balance\n',
    transactions: []
  },
  balance: 0
}
> myAccount.deposit(30)
undefined
> myAccount.balance
30
> myAccount.withdraw(15)
undefined
> myAccount.deposit(66)
undefined
> myAccount.statement.print()
Date || Credit || Debit || Balance
26/04/2022 || 30 ||  || 30
26/04/2022 ||  || 15 || 15
26/04/2022 || 66 ||  || 81

undefined
> 
```


## **Instructions from Makers**
<br />

### **Requirements**

- You should be able to interact with your code via a REPL like IRB or Node. (You don't need to implement a command line interface that takes input from STDIN.)
- Deposits, withdrawal.
- Account statement (date, amount, balance) printing.
- Data can be kept in memory (it doesn't need to be stored to a database or anything).

<br />

### **Acceptance criteria**

Given a client makes a deposit of 1000 on 10-01-2023
And a deposit of 2000 on 13-01-2023
And a withdrawal of 500 on 14-01-2023
When she prints her bank statement
Then she would see:

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

<br />

## **Technologies**

- JavaScript - Language
- Node.js - JS runtime environment/REPL
- Jest - Test framework
- GitHub
- ESLint - Installed but not currently being used 

<br />

## **My Approach**

I tried to build the banking system with 3 classes:
- The Bank Account class itself where you can withdraw and deposit funds. The 2 below classes are also injected into this class so this is also the class you load up to use the banking program and you can also use the print function here too (which is part of the Statement class)
- Transaction class which records every time a deposit or withdrawal is made. I did not want these to change once they had been created, i.e. you cannot change the deposit amount once the object has been constructed
- Statement class which records all transactions and can print them out including the account's current balance

## **Project Set-up**

<br />

### **Clone the repo!**

Paste the following command in your terminal:

```
git clone https://github.com/jam9304/bank-tech-test.git
```

<br />

### **Install all those dependencies!**

Paste the following commands in your terminal:

```
cd bank-tech-test
npm install
```

<br />

### **Run the program and create your own bank account!**

The program is run within the node REPL. 

To load up, please enter the following commands into your terminal:

```
cd src
node
.load bankAccount.js
```

To create an account:

```
yourAccount = new BankAccount()
```

To make a deposit/withdraw funds (replace 10 with any amount you want to use):
```
yourAccount.deposit(10)
yourAccount.withdraw(5)
yourAccount.deposit(34)
```

To check your account's balance:

```
yourAccount.balance
```
Which will return:
```
39
```

To print your account's statement which will include all previous transactions:

```
yourAccount.statement.print()
```
Which will return:
```
Date || Credit || Debit || Balance
26/04/2022 || 10 ||  || 10
26/04/2022 ||  || 5 || 5
26/04/2022 || 34 ||  || 39
```

<br />

### **Run Tests (the best bit!)**

Please make sure you have excited to node REPL by pressing control + C at the same time. 

Please now type the following into your terminal:
```
npm test
```
This will run all units test and the feature test.

<br />

## **Future Improvements**

<br />

- Throw errors when non integers are added to deposit/withdraw

- Have a minimum balance, i.e. 0 or if an account had an overdraft it could be -100 etc.