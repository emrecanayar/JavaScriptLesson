// Soru Saat 19 dan önce ise iyi günler değilse iyi akşamlar mesajını uyarı olarak ekrana yazdıralım.

// let date = new Date();
// var hour = date.getHours();

// if (hour < 19) {
//   alert("İyi günler");
// }
// else if(hour ==19){
//     alert("Gün ortası")
// }
// else {
//   alert("İyi akşamlar");
// }

// Soru 0-100 arasında girilen notu beşlik sisteme çevirin.

// let point = window.prompt();

// point = Number(point);

// if (point < 0) {
//   alert("Girmiş olduğunuz sıfırdan küçük olamaz.");
// } else if (point > 0 && point <= 50) {
//   alert("KALDINIZ");
// } else if (point > 50 && point <= 69) {
//   alert("ORTA GEÇTİNİZ");
// } else if (point > 69 && point <= 89) {
//   alert("İYİ GEÇTİNİZ");
// } else if (point > 89 && point <= 99) {
//   alert("PEK İYİ GEÇTİNİZ");
// } else if (point === 100) {
//   alert("MÜKEMMEL");
// } else {
//   alert("HATALI NOT");
// }

// Soru kullanıcıdan gelen sayının negatif mi pozitif mi veya 0 eşit olup olmadığını kontrol ediniz.

// let number = window.prompt();
// var numberFormat = parseInt(number);

// if (numberFormat < 0) {
//   console.log("Girilen Sayı Negatifdir => ", numberFormat);
// } else if (numberFormat > 0) {
//   console.log("Girilen Sayı Pozitifdir =>", numberFormat);
// } else {
//     console.log("Girilen Sayı Sıfıra Eşittir =>",numberFormat);
// }

//Yaşı girilen kullanıcının ehliyet alıp alamayacağını, ehliyet alamıyorsa kaç yıl sonra alacağını yazdıran program.

// let age = window.prompt();
// let ageNumber = Number(age);

// if (ageNumber >= 18) {
//   console.log("Yaşınız ehliyet almak için uygundur.");
// } else {
//   let year = 18 - ageNumber;
//   console.log(`Ehliyet almak için ${year} yılınız var.`);
// }

//Eğer girilen not 0'dan küçükse 0'dan küçük bir not girişi yapmazsınız 100 den büyükse 100 den büyük bir not girişi yapamazssınız.
//Eğer 0 ile 100 arasında bir not girmisse hatasız not girişi yaptınız.

// let point = window.prompt();
// let pointNumber = Number(point);

// if (pointNumber < 0) {
//   alert("Sifirdan kucuk not girisi yapamazsiniz.");
// } else if (pointNumber > 100) {
//   alert("Yuzden buyuk not girisi yapamazsiniz");
// } else {
//   alert("Hatasiz not girisi yaptiniz");
// }

//Klavyeden girilen sayı tek mi çift mi bunun kontorlünü yapan program.
// let stringNumber = window.prompt();
// let stringNumberLenght = stringNumber.length;

// if(stringNumberLenght === 0){
//     alert("Boş değer giremessiniz");
// }

// if (stringNumber === "")  alert("Boş değer giremessiniz");
// else{
//     let number = parseInt(stringNumber);
//     if(number % 2 ===0) console.log("Bu sayı çifttir");
//     else console.log("Bu sayı tektir.")

// }

//Dışarıdan girilen kelimenin uzunluğu 8 karaktere eşit yada büyükse kayıt onaylandı, eğer değilse daha uzun bir şifre giriniz.
// var password = window.prompt();
// let passwordLength = password.length;

// if(passwordLength>=8) console.log("Kayıt onaylandı");
// else console.log("Girmiş olduğunuz şifre minimum 8 karakter olmalı");

// var email = window.prompt();
// let result = email.includes("@");
// if(result) console.log("Email adresiniz onaylandı");
// else console.log("Lütfen geçerli bir email adresi giriniz.")

//kullanıcıdan kullanıcı adı ve şifre alalım. Eğer kullanıcı adı admin ise ve şifre =1234 ise ekrana başarıyla giriş yaptınız yazsın.
//Eğer şifre ve kullanıcı adı yukarıdaki gibi değilsee kullanıcı adınız veya şifreniz hatalı mesajı yazsın.
// let userName = window.prompt()
// let password = window.prompt()

// if(userName === "admin" && password === "1234"){
// alert("Girisiniz Basarili");
// }

// else alert("Kullanici adi veya sifre hatali");

/*Dışarıdan girilen değer 
Domates,Biber,Patlıcan ise alert ile ekrana sebze reyoununa buyrun 
Diş Macunu,Parfüm,Şampuan ise => kozmetik reyonuna buyrun
Cep Telefonu,Bilgisayar,Ses Sistemi => Teknoloji reyonuna buyrun
Başka bir ürün ise bu ürün bizde yok yazsın*/

// let product = window.prompt();
// let lowerCaseProduct = product.toLowerCase();

// if(lowerCaseProduct === "Domates".toLowerCase() || lowerCaseProduct === "Biber".toLowerCase() || lowerCaseProduct ==="Patlican".toLowerCase()){
//     alert("Sebze Reyonuna Hosgeldiniz");
// }
// else if(lowerCaseProduct === "Dis Macunu".toLowerCase() || lowerCaseProduct === "Parfum".toLowerCase() || lowerCaseProduct ==="Sampuan".toLowerCase()) alert("Kozmetik Reyonuna Hosgeldini");
// else if (lowerCaseProduct === "Cep Telefonu")

//Bir üniversite öğrencilerinin ortamaları 50 ve üzerinde ise dersten başarılı sayılacaklardır. Öğrencinin vize notu toplam ortalamaya %40 etki yapacak, final notu ise %60 etki yapacaktır. Buna göre öğrencinin ders başarı durumunu hesaplayan programı yazınız.

let vize = parseInt(window.prompt());
let final = parseInt(window.prompt());
let ortalama = 0;

ortalama = (vize * 40 / 100 ) + (final * 60 / 100) ;
let message = ortalama >=50 ? `Ortalamanız ${ortalama} dersten geçtiniz`:`Ortalamanız ${ortalama} dersten kaldınız`;
console.log(message);