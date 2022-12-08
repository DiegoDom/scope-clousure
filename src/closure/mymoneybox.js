/* function moneyBox(coins) {
  let savedCoins = 0;
  savedCoins += coins;

  console.log(`MoneyBox: $${savedCoins}`);
}

moneyBox(5);
moneyBox(2);
 */

function moneyBox() {
  let savedCoins = 0;

  function addCoins(coins) {
    savedCoins += coins;
  }

  function getSavings() {
    return `Saved money: $${savedCoins}`;
  }

  return {
    addCoins,
    getSavings,
  };
}

const myMoneyBox = moneyBox();
myMoneyBox.addCoins(5);
myMoneyBox.addCoins(5);
myMoneyBox.addCoins(5);
myMoneyBox.addCoins(35);

const accountTaylor = moneyBox();
accountTaylor.addCoins(20);
accountTaylor.addCoins(30);
accountTaylor.addCoins(100);

console.log(myMoneyBox.getSavings());
console.log(accountTaylor.getSavings());

function createPetList() {
  const pets = [];

  function addPet(pet) {
    pets.push(pet);

    console.log(pets);
  }

  return addPet;
}

const myPetList = createPetList();

myPetList("michi");

myPetList("firulais");
