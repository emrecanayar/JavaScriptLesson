//Destructuring

const person = {
  country: "Turkey",
  city: "İstanbul",
  firstName: "Emre Can",
  lastName: "Ayar",
  age: 29,
};

//Klasik yöntem
// const firstName = person.firstName;
// const lastName = person.lastName;
// const age = person.age;

// console.log(firstName,lastName,age);

//Destructuring kullanarak

const { firstName, lastName, age } = person;

console.log(`Adınız : ${firstName}, Soyadınız: ${lastName}, Yaşınız : ${age}`);

const getThePerson = () => {
  return {
    country: "Turkey",
    city: "İstanbul",
    firstName: "Merve",
    lastName: "Doğan",
    age: 25,
  };
};

const { country, city } = getThePerson();

console.log(`Ülkeniz : ${country}, Şehriniz : ${city}`);


const [first,second,,,fifth,]=["Emre Can","Ali","Ahmet","Hakan","Uğur","İrem","Merve"]
console.log(first,second,fifth);