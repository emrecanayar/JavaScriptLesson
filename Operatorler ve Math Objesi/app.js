let value;

const value1 = 10;
const value2 = 4;

//Aritmetik Operatörler

//Toplama
value = value1 + value2;

//Çıkarma
value = value1 - value2;

//Çarpma
value = value1 * value2;

//Bölme
value = value1 / value2;

//Mod alma kalan (bölümünden kalan)
value = value1 % value2;

// console.log(value);

//Math objesinin yalın kullanımı
value = Math.PI; //Pi sayısı
value = Math.E; // Logaritma Kat Sayısı

//Round ondalıklı sayıları yuvarlamaya yarar.
value = Math.round(3.6); //Yukarı yuvarlar.
value = Math.round(3.5); //Yukarı yuvalar.
value = Math.round(3.2); //Aşağıya yuvarlar.

//Ceil bütün ondalık değerleri bir üsteki tam sayıya yuvarlar.
value = Math.ceil(3.2);
value = Math.ceil(2.9);

//Floor bütün ondalık değerleri bir alttaki tam sayıya yuvarlar.
value = Math.floor(3.9);
value = Math.floor(3.2);

//sqrt fonksiyonu karekök almak için kullanılır.
value = Math.sqrt(16);
value = Math.sqrt(31);

//abs fonksiyonu ile belirtilen sayınının mutlak değeri alınır.
value = Math.abs(-10);

//Pow metodu üst almaya yarar. ilk parametre üstü alınacak sayı, ikinci parametre üstü
value = Math.pow(2, 5);
value = Math.pow(8, 3);

value = Math.max(10, -1, 100, 32); //Max metodu içerisine aldığı sayısal değerler arasından en büyük sayıyı getirir.
value = Math.min(10, -1, 100, 32); //Min metodu içerisine aldığı sayılsal değerler arasından en küçük sayıyı getirir.

value = Math.random(); // 0 ve 1 arasında rastgele bir sayı verir.

//0 ile 20 arasında rastgale sayı üretmek istiyorum.

value = Math.floor(Math.random() * 20);

console.log(value);
