//Spread Operator Object

const user = {
  firstName: "Emre Can",
  lastName: "Ayar",
};

console.log(user);

const address = {
  country: "Turkey",
  city: "İstanbul",
  street: "Barboros",
};

console.log(address);

const userAddress = { ...user, ...address };
console.log(userAddress);

const newUserWithId = {id:1,...userAddress};
console.log(newUserWithId);