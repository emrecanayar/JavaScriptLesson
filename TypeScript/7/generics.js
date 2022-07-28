function deger(x) {
    return x;
}
function deger2(x) {
    return x;
}
var sayi = deger(10);
console.log(sayi);
var sehir = deger2("Ankara");
console.log(sehir);
//Generic metot tanımlama
function deger3(x) {
    return x;
}
var sayi3 = deger3(2);
// function deger3(x: number): number {
//     return x;
//   }
var sehir3 = deger3("Samsun");
console.log(sayi3);
console.log(sehir3);
//Generic Class Tanımlama
var GenericClass = /** @class */ (function () {
    function GenericClass() {
    }
    GenericClass.prototype.fonksiyon = function (parametre) {
        return parametre;
    };
    return GenericClass;
}());
var Deneme = /** @class */ (function () {
    function Deneme() {
    }
    return Deneme;
}());
var TestEnum;
(function (TestEnum) {
    TestEnum[TestEnum["Ali"] = 0] = "Ali";
    TestEnum[TestEnum["Veli"] = 1] = "Veli";
    TestEnum[TestEnum["Elli"] = 2] = "Elli";
})(TestEnum || (TestEnum = {}));
var degiskenBool = true;
var numberDegisken = 10;
var stringDegisken = "Test";
var objectt = {};
var arrayssss = [];
var sinif = new GenericClass();
var sonuc = sinif.fonksiyon("Trabzon");
console.log(sonuc);
