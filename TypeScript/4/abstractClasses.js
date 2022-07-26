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
var KrediBase = /** @class */ (function () {
    function KrediBase() {
    }
    KrediBase.prototype.kaydet = function () {
        console.log("Kaydedildi");
    };
    return KrediBase;
}());
var TuketiciKredisi = /** @class */ (function (_super) {
    __extends(TuketiciKredisi, _super);
    function TuketiciKredisi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TuketiciKredisi.prototype.hesapla = function () {
        console.log("Tüketici kredisine göre hesap yapıldı.");
    };
    return TuketiciKredisi;
}(KrediBase));
var MortgageKredi = /** @class */ (function (_super) {
    __extends(MortgageKredi, _super);
    function MortgageKredi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MortgageKredi.prototype.hesapla = function () {
        console.log("Konut kredisine göre hesap yapıldı");
    };
    MortgageKredi.prototype.baskaBirOperasyon = function () {
    };
    return MortgageKredi;
}(KrediBase));
var AracKredisi = /** @class */ (function (_super) {
    __extends(AracKredisi, _super);
    function AracKredisi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AracKredisi.prototype.hesapla = function () {
        console.log("Araç kredisine göre hesap yapıldı");
    };
    return AracKredisi;
}(KrediBase));
//Abstract class lar kendilerinden miras alınan sınıflara ön ayak olmak için oluşturulur.
//Abstract classlar içerisinde abstract anahtar kelimesi ile metotlar ve propertyler tanımlabilir.
//Abstract classlar içerisinde tanımlanan asbtract metotlar veya propertyler miras alınan sınıfın içerisinde mutlaka kullanılmalıdır.
//Abstact olarak işaratlenen metotların gövdevleri abstract class lar içerisinde doldurulmaz. Miras alındıkları sınıflar içerisinde gövdesi doldurulur.
var tuketiciKredisi = new TuketiciKredisi();
tuketiciKredisi.hesapla();
var evKredisi = new MortgageKredi();
evKredisi.hesapla();
