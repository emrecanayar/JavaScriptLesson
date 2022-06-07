let value;

const firstName = "Emre Can";
const lastName = "Ayar";
const langs = "JavaScript,HTML,CSS,BootStrap";
const extensions = "dosya.xlsx"
const sampleTrim = " Bu bir test mesajıdır  "

//String birleştirme işlemi
value = firstName + lastName;
value = firstName + " " + lastName;

value = "Emre Can";
value += " Ayar"; //value = value + "Ayar"

let ad = "Merve";
let soyad = "Doğan";

let name = "Merve";
// name = name + " Doğan";
name += " Doğan";
// console.log(name);

value = ad + " " + soyad;

//String bir ifadenin karakter uzunluğunu alma işlemi bu şekilde gerçekleşmektedir.
value = firstName.length;

//String birleştirme işlemi concat metodu ile.
value = firstName.concat(" ", lastName, " ", "Yaş:", "29");

//String bir ifadenin içerisinde yer alan bütün harfleri küçük yapar.
value = firstName.toLowerCase();

//String bir ifadenin içerisinde yer alan bütün harfleri büyük yapar.
value = firstName.toUpperCase();

value = firstName[0]; //İlgili string ifadenin ilk harfini almak
value = firstName[2];
value = firstName[firstName.length - 1]; //İlgili string ifadenin son harfini almak.

//Index Of => String bir ifadede bir harfin hangi indexte olduğunu öğrenmek istiyorsak kullanırız.

value = firstName.indexOf("e"); //e harfi üçüncü index te yer almaktadır. Eğer birden fazla e harfi olsaydı ilk bulduğu indexi getirirdi.
value = firstName.indexOf("E");

//CharAt => İçerisine parametre olarak gönderdiğimiz index numarasına karşılık gelen değeri bize döndürür.
value = firstName.charAt(3);
value = firstName.charAt(firstName.length - 1);

//Split metodunun içerisine belirtilen parametre ile uygulanan string ifade içinde parçalama işlemi yapar. Parametre olarak belirlediğimiz değre göre stringler içerisinde parçalama işlemi yapar ve sonuçları bir array a atar.
value = langs.split(",");
// console.log(typeof(value));

//Replace metodu string içerisinde herhangi bir alanı değiştirmek istediğimizde kullanırız. İçerisine verdiğimiz ilk parametre değiştirmek istediğimiz alan, ikinci parametre ise yeni kelimemizdir.
value = langs.replace("JavaScript","C++").replace("CSS","AntDesign").replace("HTML","React");

//Includes metodu ile string içerisinde parametre olarak verdiğimiz değer var mı yok mu bunun kontrolünü gerçekleştirir. Eğer parametre olarak verdiğimiz değer ilgili string değişkeninin içerisinde varsa true yoksa false döner.
value = langs.includes("HTML")
value = langs.includes("asdasdasdasdasdsa")

//endsWith metodu içerisine aldığı parametre ilgili değişkenin o şekilde bitip bitmediğini kontrol eder. Eğer parametre olarak verdiğimiz değer ile bitiyorsa true bitmiyorsa false döner.
value = extensions.endsWith(".xlsx")

var a = sampleTrim.length;
console.log(a);

//Trim metodu string ifadenin başında ve sonunda yer alan boşlukları temizleyeme yarar.
value = sampleTrim.trim();
var b = value.length;
console.log(b);


console.log(value);
