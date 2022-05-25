//Referans veri tipleri
//Array => içerisinde birden fazla veriyi barındıran yapılara denir.
var numbers = [1, 2, 3, 4, 5];
console.log("Numbers =>", numbers);
console.log("Birinci sıradaki eleman", numbers[0]);
console.log("Dördüncü sıradaki eleman", numbers[0]);

//Object veri tipi
var person = {
  firstName: "Emre Can",
  lastName: "Ayar",
  age: 29,
  isActive: true,
};

console.log("Person =>", person);
console.log("Person Type =>", typeof person);

//DateObject veri tipi
var date = new Date();
console.log("Date => ", date);

//Function veri tipi
//Fonksiyon tanımlanırken () parantez syntax olarak tanımlanır ve fonksiyonun ne yapmasını istiyorsak bu durumda süslü parantezler arasına yapmasını istediğimiz işlemler yazılır.
var merhaba = function () {
 
  console.log("Merhaba");
};

console.log("Function =>",merhaba)