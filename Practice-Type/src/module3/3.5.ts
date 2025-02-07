{
  // access modifiers
  class BankAccount {
    readonly id: number;
    public name: string;
    private _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }

    getBalance() {
      return this._balance;
    }
  }

  const newIbnAcc = new BankAccount(12, "Mr. Ibn", 10000);
  newIbnAcc.addDeposit(5000);

  const myBala = newIbnAcc.getBalance();

  console.log(myBala);
}
