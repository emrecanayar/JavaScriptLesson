// Hemen hemen her progralama dilin bulunan yapıdır. (Array)
// Array yapısı içerisinde birden fazla veri barındırır.
let value;

//JavaScript te array tanımlama yöntemleri.

const numbers = [45, 32, 74, 95, 11, 2, 15, 74, 11];
const numbers2 = new Array(1, 2, 3, 4, 5, 6, 7);
const langs = ["Pyhton", "C#", "Java", "JavaScript"];
const array = ["Merhaba", 22, null, undefined, 3.14];

//Array in özellikleri

//Array in uzunluğu almak.
value = numbers.length;

//Array lerin indexlenmesi
value = numbers[0];
value = numbers[2];
value = numbers[numbers.length - 1];

numbers[0] = 147; // Değer atama işlemi
value = numbers[0]; // Değer okuma işlemi

//IndexOf metodu içerisine parametre olarak verilen değerin hangi index te olduğunu gösterir.
value = numbers.indexOf(147);
value = numbers.indexOf(11);

//Array in sonuna yeni bir eleman eklemek
numbers.push(55, 61);
value = numbers;

//Array in başına yeni bir eleman eklemek.
numbers.unshift(47);
value = numbers;

//Arrayin sonundan değer atmak(kaldırmak).
numbers.pop();
numbers.pop();
value = numbers;

//Array in başından değer atmak(kaldırmak).
numbers.shift();
value = numbers;

//Arrayı belirli bir indexten belir bir indexe kadar değer atmasını sağlar.
numbers.splice(0, 3);
value = numbers;

//Array içerisindeki elemanları ters çevirme.
numbers.reverse();
value = numbers;

//Array sıralama
value = numbers.sort(); //Bu karışık sıralıyor , sıralama yaptığında sadece ilk index numaralarına bakıyor.

//Eğer düzgün bir şekilde küçükten büyüğe sıralayacaksak aşağıdaki şekilde yapabiliriz.

//Küçükten büyüğe sıralamak.
value = numbers.sort(function (x, y) {
  return x - y;
});

//Büyükten küçüğe sıralamak.
value = numbers.sort(function (x, y) {
  return y - x;
});


console.log(value);
