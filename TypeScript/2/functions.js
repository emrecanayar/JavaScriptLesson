function topla(x, y) {
    return x + y;
}
function topla2(x, y) {
    return x + y;
}
var topla3 = function (x, y) {
    return x + y;
};
var topla4 = function (x, y) {
    return x + y;
};
console.log(topla(2, 3));
console.log(topla("Ankara", 2));
console.log(topla2(3, 2));
console.log(topla3(5, 2));
console.log(topla4(4, 9));
var topla5 = function (x, y) {
    if (y === void 0) { y = 5; }
    return x + y;
};
console.log(topla5(3, 4));
var topla6 = function (x, y) {
    if (y)
        return x + y;
    return x;
};
console.log(topla6(5, 40));
function davetEt(ilkDavetli) {
    var digerleri = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        digerleri[_i - 1] = arguments[_i];
    }
    return "".concat(ilkDavetli, " ").concat(digerleri.join(" "));
}
function davetEtVersion2() {
    var digerleri = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        digerleri[_i] = arguments[_i];
    }
    return "".concat(digerleri.join(" "));
}
//Uzun yolu
// function davetEt(ilkDavetli:string,ikinciDavetli:string,ucuncuDaveleti:string,dorduncuDavetli:string);
console.log(davetEt("Engin", "Merve", "Emre", "Salih"));
console.log(davetEtVersion2("Merve", "Doğan", "Emre", "Can", "Ayar"));
