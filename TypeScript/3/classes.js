var Ev = /** @class */ (function () {
    function Ev() {
    }
    //   constructor(odaSayisi: number, pencereSayisi: number, kat: number) {
    //     this.odaSayisi = odaSayisi;
    //     this.pencereSayisi = pencereSayisi;
    //     this.kat = kat;
    //   }
    Ev.prototype.yemekYe = function () {
        console.log(this.kat + " katlı evde " + "yemek yiyildi");
    };
    return Ev;
}());
var ev = new Ev();
ev.kat = 5;
ev.odaSayisi = 3;
ev.pencereSayisi = 16;
ev.yemekYe();
console.log(ev);
var Araba = /** @class */ (function () {
    function Araba() {
    }
    return Araba;
}());
