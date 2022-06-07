//Karşılaştırma Operatöleri

/*
 ==     => Eşitlik kontrölü için kullanılır.
 ===    => Eşitlik kontrölü için kullanılır fakat JavaScript içerisinde eşitliğe bakerken aynı zamanda değerlerin tiplerinide kontrol eder.
 !=     => Eşit olmama durumunu kontrol etmek amacıyla kullanılır.
 !==    => Eşit olmama durumıunu tip kontröllü şekilde kontrol etmek amacıyla kullanılır.
 >      => Değerleri büyüklüğüne göre kontrol etmek amacıyla kullanılır.
 <      => Değerleri küçüklüğüne göre kontrol etmek amacıyla kullanılır.
 >=     => Değerleri büyük eşit olma durumuna göre kontrol etmek amacıyla kullanılır.
 <=     => Değerleri küçük eşit olma durumuna göre kontrol etmek amacıyla kullanılır.

*/

console.log(2 == "2"); //Değer kontrolü yapar. Tip kontrolü yapmaz.
console.log(2 == 2); //Değer kontrolü yapar. Tip kontrolü yapmaz.
console.log("js" == "javascript"); //Değer kontrölü yapar. Tip kontrolü yapmaz.
console.log(2 === "2"); //Değer kontrölü yapar aynı zamanda tip kontorülde yapar.

//Not : Javascript te eşitlik değeri ile kontol yapacaksak === ile yapmamız da fayda var çünkü değer ve aynı zamanda tip kontrölünü gerçekleştirir.

console.log(4 > 2); //4 2 den büyük müdür.
console.log(2 > 4); //2 4 den büyük müdür.
console.log(2 != 4); //2 eşit değil midir 4 e.
console.log(2 != 2); // 2 eşit değilmidir 2 ye.
console.log(2 >= 2); //büyük eşit
console.log(2 <= 4); //küçük eşit

//Not Operatörü ! => değilini almak.

console.log(!(2 != 2)); // Eğer bir sonuç false ise ben buna not operatörünü uygularsam sonuç true olur. Aynı şekilde true olan bir işlemine  not operatörünü uygularsam sonuç false olur.

console.log(!true);

//And operatörü (ve)  &&
/*
 true && true ise sonuç => true
 true && false ise sonuç => false
 false && true ise sonuç => false
 false && false ise sonuç => false

*/

console.log(2 == 2 && "Emre Can" == "Emre Can");
console.log(2 == 4 && "Emre Can" == "Emre Can");
console.log(2 == 4 && "Mert Can" == "Emre Can");

//Or operatörü (veya) ||
/*
 true || true ise sonuç => true
 true || false ise sonuç => true
 false || true ise sonuç => true
 false || false ise sonuç => false

*/

console.log(2 == 2 || "Emre Can" == "Emre Can"); //true
console.log(2 == 4 || "Emre Can" == "Emre Can"); //true
console.log(2 == 4 || "Mert Can" == "Emre Can"); //false

//If yapısı aşağıdaki şekilde gösterilmektedir.

/*

if(kosul){
    // if bloğu içerisi bu şekilde çalışır. (if bloğu içerisindeki şart doğru ise süslü parantezler içerisindeki kod çalışır.)
}
else if(kosul){
    // else if bloğu içerisi bu şekilde çalışır. (else if içerisindeki koşul doğruysa burası çalışır.)
}
else{
    //Yukarıdaki belirtilen koşullardan hiç biri doğru değilse burası çalışır.
}


*/

const error = false;

if (error === true) {
  console.log("Hata Oluştu");
} else {
  console.log("Başarılı");
}

const process = "2";

if (process === "1") {
  console.log("İşlem 1");
} else if (process === "2") {
  console.log("İşlem 2");
} else if (process === "3") {
  console.log("İşlem 3");
} else if (process === "4") {
  console.log("İşlem 4");
} else if (process === "5") {
  console.log("İşlem 5");
} else {
  console.log("Geçersiz İşlem");
}

//Tenary Operatörü

const number = 120;

// Kullanımı şekli şu şekildedir => şart ? şart doğru ise çalış : şart yanlış ise çalış
// Soru işaretinden önce şartımızı belirtiyoruz.
// Eğer belirttiğimiz şart doğru ise ? işaretinden sonraki kısım çalışır : kısım çalışmaz.
// Eğer şartımız yanlış ise bu sefer de direkt olarak : kısmından sonraki kod bloğu çalışır.

console.log(number === 100 ? "Sayı Doğru" : "Sayı yanlış");

//Örnek if ve ternary operatörü

const age = 19;
let canHaveIt = false;
let canHaveItText = "";

// if(age >=18){
//     canHaveIt = true;
// }
// else{
//     canHaveIt = false;
// }

// console.log("Kullanıcı ehliyet alabilir mi? "+canHaveIt);

canHaveIt = age >= 18 ? true : false;

console.log(`${canHaveIt ? "Ehliyet Alabilir":"Ehliyet Alamaz"}`);