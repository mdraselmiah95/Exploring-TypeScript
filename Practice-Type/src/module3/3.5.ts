{
  // access modifiers
  class BankAccount {
    readonly id: number;
    public name: string;
    private balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this.balance = balance;
    }

    addDeposit(amount: number) {
      this.balance = this.balance + amount;
    }

    getBalance() {
      return this.balance;
    }
  }

  const newIbnAcc = new BankAccount(12, "Mr. Ibn", 10000);
  newIbnAcc.addDeposit(5000);

  const myBala = newIbnAcc.getBalance();

  console.log(myBala);
}
