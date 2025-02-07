{
  // getter and setter

  class BankAccount {
    readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    // addDeposit(amount: number) {
    //   this._balance = this._balance + amount;
    // }

    // getBalance() {
    //   return this._balance;
    // }

    //setter
    set deposit(amount: number) {
      this._balance = this._balance + amount;
    }

    //getter
    get Balance() {
      return this._balance;
    }
  }

  class StudentAccount extends BankAccount {
    testAc() {
      this._balance = this._balance;
    }
  }

  //   const newIbnAcc = new BankAccount(12, "Mr. Ibn", 10000);
  //   newIbnAcc.addDeposit(5000);

  //   const myBala = newIbnAcc.getBalance();

  // console.log(myBala);

  const newRasBalance = new BankAccount(111, "Mr Rasel", 50);
  newRasBalance.deposit = 100;
  const myBalance = newRasBalance.Balance;
  console.log({ myBalance });

  //
}
