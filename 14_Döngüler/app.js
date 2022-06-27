//While Döngüleri

//İçerisinde parametre olarak yer alan koşulun sonucu true olana kadar içerisindeki işlemler devam eder.
//İçerisindeki parametre olarak yer alan şart bloğu false olduğu an döngü sonlanır.

// let i = 0;

// while (i < 10) {
//   console.log(i);
//   i++;
// }

//continue ve break değimleri.
//Döngüler içerisinde ihtiyaç duydukça kullanılan break ve continue değimlerine bir göz atalım.

//Break Deyimi => Çalıştığında break komutuna gelindiğinde döngü sonlanır.

// let number = 20;
// while (number > 3) {
//   console.log(number);
//   if (number === 5) {
//     break;
//   }
//   number--;
// }

//Continue Deyimi => a == 3 şartı sağlandığında continue komutu çalıştırılacak ve contiune komuut çalıştığında döngü içerisindeki o sıra atlanır ve döngü en baştan ilerleyerek sıradaki index numarasını takip eden işlemlerden devam eder.

// let a = 0;
// while (a < 10) {
//   if (a == 3) {
//     a++;
//     continue;
//   }
//   console.log(a);
//   a++;
// }

//For Döngüsü
// const langs = ["C#", "Pyhton", "JavaScript", "Java"];

// for (let index = 0; index < 10; index++) {
//     console.log("Merve");
// }

// for (let index = 0; index < langs.length; index++) {
//     const element = langs[index];
//     console.log(element);
// }

//Foreach Döngüsü
//İlk parametre(item) dizi içerisindeki elemanları verir, ikinci parametre(index) ise dizi içerisindeki elemanların index numaralarını verir.
// const langs = ["C#", "Pyhton", "JavaScript", "Java"];

// langs.forEach(function (item, index) {
//   console.log(item, index);
// });

// const games = ["Cs Go", "Dota", "Fifa", "GTA"];

// games.forEach((item,index)=>{
//     console.log(item,index);
// })

//Map kullanımı => Genelde Object Array yapılarında kullanılır.

//Object Array

const users = [
  { firstName: "Emre Can", lastName: "Ayar", age: 29 },
  { firstName: "Aziz", lastName: "Yılmaz", age: 30 },
  { firstName: "Merve", lastName: "Doğan", age: 25 },
  { firstName: "Yaren", lastName: "Oskay", age: 26 },
];

const firstNames = users.map(function (user) {
  return user.firstName;
});

users.map((user) => {
  console.log(user.age);
});

console.log(firstNames);
