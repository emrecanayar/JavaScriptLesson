const process = "5";

// if (process === "1") {
//   console.log("İşlem 1");
// } else if (process === "2") {
//   console.log("İşlem 2");
// } else if (process === "3") {
//   console.log("İşlem 3");
// } else if (process === "4") {
//   console.log("İşlem 4");
// } else if (process === "5") {
//   console.log("İşlem 5");
// } else {
//   console.log("Geçersiz İşlem");
// }

//Switch-case de bir conditionals ifadesidir. Burada da şartlara göre işlemler yapılır.
//Switch-case kullanılırken switch() içerisine verilen parametre elde etmek istediğimiz sonuçtur. Case ler ise bu sonuca uygun olabilecek değerleri barındırır. Çalışma prensibi olarak case ler içerisinde yer alan değerlerden herhangi biri switch içerisindeki değere uygunsa o case bloğu çalışır. Eğer switch içerisindeki değer case lerden hiç birine denk gelmiyorsa işte o zaman default kısmı çalışır.

// switch (process) {
//   case "1":
//     console.log("İşlem 1");
//     break;
//   case "2":
//     console.log("İşlem 2");
//     break;
//   case "3":
//     console.log("İşlem 3");
//     break;
//   case "4":
//     console.log("İşlem 4");
//     break;
//   default:
//     console.log("Geçersiz İşlem");
//     break;
// }

//Ekrandan girilen sayı değerine göre günün adını alert ile ekrana yazan program. (Switch-Case ile yapacağız.),
let days = window.prompt();

switch (days) {
  case "1":
    alert("Pazartesi");
    break;
  case "2":
    alert("Sali");
    break;
  case "3":
    alert("Carsamba");
    break;
  case "4":
    alert("Persembe");
    break;
  case "5":
    alert("Cuma");
    break;
  case "6":
    alert("Cumartesi");
    break;
  case "7":
    alert("Pazar");
    break;

  default:
    alert("Gecersiz Islem");
    break;
}

//Kullanıcıdan iki tane sayı girmesini isteyeceğiz.
//Kullanıcıdan hangi işlemi yapmasını belirtmesini isteyeceğiz. (Toplama = + , Çıkarma = - , Bölme = / , Çarpma = *)
//Kullanıcdan gelen sayı ve işlem bilgileri ile belirtilen işleme göre sayılar işlenecek ve sonucu console a yazılacak.
let number1 = Number(window.prompt());
let number2 = Number(window.prompt());
let operation = window.prompt();
let result = 0;

switch (operation) {
  case "+":
    result = number1 + number2;
    break;
  case "-":
    result = number1 - number2;
    break;
  case "*":
    result = number1 * number2;
    break;
  case "/":
    result = number1 / number2;
    break;

  default:
    alert("Lutfen gecerli bir islem giriniz.");
    break;
}
console.log(`Isleminizin sonucu ${result}`);
