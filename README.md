# **Bank Tech Test**

<br />

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
'Date || Credit || Debit || Balance\n' +
  '26/04/2022 || 10 ||  || 10\n' +
  '26/04/2022 ||  || 5 || 5\n' +
  '26/04/2022 || 34 ||  || 39\n'
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

- Currently \n can be seen in the return of the statement, so I would remove this

- Throw errors when non integers are added to deposit/withdraw

- Have a minimum balance, i.e. 0 or if an account had an overdraft it could be -100 etc.