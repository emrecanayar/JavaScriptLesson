//Veri tiplerini stringe çevirmek

let value;

value = String(123); //Sayısal bir veriyi stringe çevirme işlemi
console.log(value);
console.log(typeof(value));

value = String(3.14);
console.log(value);
console.log(typeof(value));

value = String(true); //Mantıksal bir veriyi stringe çevirme işlemi
console.log(value);
console.log(typeof(value));


value = String([1,2,3,4]); //Array tipinde bir veriyi stringe çevirme işlemi
console.log(value);
console.log(typeof(value));


//Stringe çevirme işlemi versiyon 2 
let number = 10;
let isTrue = false;

let a = number.toString();
console.log(a);
console.log(typeof(a));

let b = isTrue.toString();
console.log(b);
console.log(typeof(b));


// ------------------------------------------------------------------------------------------------------------------


//Veri tiplerini sayı veri tipine çevirme.

value = Number("123");
console.log(value);
console.log(typeof(value));

value = Number(null);
console.log(value);


value = parseInt("3"); //Tam sayı
console.log(value);

value = parseFloat("3.14");
console.log(value);