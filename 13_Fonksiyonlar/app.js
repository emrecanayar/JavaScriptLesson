//Fonksiyon tanımlama
// Bir fonksiyon tanımlarken function anahtar kelimesi kullanılır.
// function anahtar kelimesinden sonra oluşturacağımız fonksiyonun adını belirtiriz.(Aşağıdaki örnek için merhaba)
// Bir fonksiyon oluşturulurken isimden sonra eğer fonksiyon parametre alırsa diye aç kapa parantezler ile bunun bir fonksiyon olduğu belirtilir.
// Son olarak süslü parantezler içerisinde fonksiyonun gövdesini yazıyoruz. Gövde kısmında bu fonksiyon çağrıldığında yapacak olduğu işi kodluyoruz.

//Fonksiyon tanımlama
function merhaba() {
  console.log("Merhaba");
}

//Tanımlaman fonksiyonun kullanımı
merhaba();

//Parametreli fonksiyon tanımlama
function adSoyad(name, surname) {
  console.log(`İsim : ${name} Soyad: ${surname}`);
}

//Parametreli fonksiyon çağırma
adSoyad("Emre Can", "Ayar");
adSoyad("Merve", "Doğan");
adSoyad("Ali", "Öztürk");

//Geriye değer döndüren fonksiyonlar. Not: Geriye değer döndüren fonksiyonlarda, fonksiyonun bodysi içerisinde döndürülmek istenen değer return anahtar kelimesi belirtilmelidir.
function kareAl(x) {
  let result = x * x;
  return result;
}

let result = kareAl(9);
alert(result);

function kupAl(y) {
  return y * y * y;
}

let value = kupAl(4);
alert(value);

//Function Expression => Oluşturmuş olduğumuz fonksiyonu bir değişkene eşitleme işlemine denir.
const selamVer = function () {
  console.log("Selam Ver");
};

//Kullanımı
selamVer();

const cube = function (y) {
  return y * y * y;
};

var cubeResult = cube(8);
console.log(cubeResult);

//Immediatety Invoked Function Expression (IIFE)

//Tanımlanması
const database = {
  host: "localhost",
  add: function () {
    console.log("Veri eklendi");
  },
  get: function () {
    console.log("Veri çekildi");
  },
  update: function (id) {
    console.log(`Id : ${id} güncellendi`);
  },
  delete: function (id) {
    console.log(`Id : ${id} silindi`);
  },
};

//Kullanımı
database.add();
database.update(5);


// --------------------------------------------------------------------------------------------------------------------------------------------
//Arrow Function tanımlama

// function logMyError(errorMessage){
//     console.log(errorMessage);
// }

// logMyError("Hata Aldık");

//Arrow function kullanımı
const logMyError = errorMessage => console.log(errorMessage);
logMyError("Hata Aldık");


// function sumUp(num1,num2){
//     return num1+num2;
// }


const sumUp = (num1,num2) => num1+num2;  //=> işarati otomatik olarak return vazifesi görür ve num1+num2 yaptıktan sonra sonucu geriye döndürür.
var sumUpResult = sumUp(5,6);
console.log(sumUpResult);


var sayMyName = name => console.log(name);
sayMyName("Emre Can");