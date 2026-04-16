class Account {
  #balance;
  constructor(name, balance) {
    this.name = name;
    this.#balance = balance;
  }

  _isValidAccount(number) {
    return typeof number === "number" && !isNaN(number) && number > 0;
  }

  cashIn(number) {
    if (!this._isValidAccount(number)) {
      console.log(`please input correct amount!`);
      return;
    }
    this.#balance += number;
  }

  cashOut(number) {
    if (!this._isValidAccount(number)) {
      console.log(`not enough balance.`);
      return;
    }
    this.#balance -= number;
  }

  getBalance() {
    return this.#balance;
  }
}

const person1 = new Account("John Doe", 5_000_000);
person1.cashIn(); // false
person1.cashIn(100000); //true

person1.cashOut(); // false
person1.cashOut(200000); // true

console.log(person1.getBalance());
