var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
ev.pencereSayisi = 15;
ev.yemekYe();
console.log(ev);
var Kisi = /** @class */ (function () {
    function Kisi() {
    }
    Object.defineProperty(Kisi.prototype, "isim", {
        get: function () {
            return this._isim;
        },
        set: function (ad) {
            this._isim = ad;
        },
        enumerable: false,
        configurable: true
    });
    return Kisi;
}());
var kisi = new Kisi();
kisi.isim = "Emre Can";
console.log(kisi.isim);
// SOAP Servisi => Servis Tipi
// Web Services => Genel Adı
// XML => Veri Tipi
// Rest Servis => Servis Tipi
// API => Genel Adı
// Json => Veri Tipi
var Musteri = /** @class */ (function (_super) {
    __extends(Musteri, _super);
    function Musteri() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Musteri.prototype.satisYap = function () {
        console.log("Satış Yapıldı");
    };
    return Musteri;
}(Kisi));
var musteri = new Musteri();
musteri.isim = "Emre Can";
musteri.soyisim = "Ayar";
musteri.yas = 29;
musteri.email = "emrecan.ayar@hotmail.com";
musteri.satisYap();
var Personel = /** @class */ (function (_super) {
    __extends(Personel, _super);
    function Personel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Personel.prototype.maasOde = function () {
        console.log("Maaş ödendi");
    };
    return Personel;
}(Kisi));
var personel = new Personel();
personel.isim = "Merve";
personel.soyisim = "Doğan";
personel.yas = 25;
personel.userName = "merve.dogan";
personel.maasOde();
