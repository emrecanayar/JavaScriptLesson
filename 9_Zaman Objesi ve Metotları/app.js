let value;
let customDate;

const now = new Date(); //Şuan ki zamanı bize verir.
console.log(now);

const date1 = new Date("09/23/1993"); //Ay/Gün/Yıl => Parametre vererek tarih oluşturmak.
value = date1;

value = date1.getMonth() + 1; //Belirtilen tarihin ay değerini almak.
value = date1.getDate(); //Belirtilen tarihin gün değerini almak.
value = date1.getDay(); //Belirtilen tarihin hangi güne denk geldiğini gösterir. (günün index numarasını verir.)
value = date1.getFullYear(); //Belirtilen tarihin yıl değerini verir.
value = now.getHours(); //Beliritlen tarihin saat bilgisini bize verir.
value = now.getMinutes(); //Beliritlen tarihin dakika bilgisini bize verir.
value = now.getSeconds(); //Belirtilen tarihin saniye bilgisini bize verir.
value = now.getMilliseconds(); //Belirtilen tarihin mili saniye bilgisini bize verir.

customDate = `${date1.getDate()}.${date1.getMonth()+1}.${date1.getFullYear()}`;

date1.setMonth(7); //Belirtilen tarih değerinin ay bilgisine yeni bir değer atamak.
date1.setDate(15); //Belirtilen tarih değerinin gün bilgisine yeni bir değer atamak.
date1.setFullYear(2002); //Beliritlen tarih değerinin yıl bilgisini değiştirmek için.
date1.setHours(10);      //Belirtilen tarih değerine saat bilgisi atamak için.
date1.setMinutes(15);    //Belirtilen tarih değerine dakika bilgisi atamak için.
date1.setSeconds(45);    //Belirtilen tarih değerine saniye bilgisi atamak için.



console.log(date1);
console.log(value);
console.log(customDate);
