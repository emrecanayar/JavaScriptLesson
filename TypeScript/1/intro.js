function selamVerTypeScript(isim) {
    return "Merhaba " + isim;
}
var mesajTypeScript = selamVerTypeScript("Merve");
console.log(mesajTypeScript);
var sayi = 12;
sayi = 10;
sayi = 10.4;
var sehir = "Adana";
sehir = "Ankara";
sehir = "İstanbul";
var dogruMu = true;
dogruMu = false;
dogruMu = true;
var sayilar = [1, 2, 3, 4, 5];
var sayilar2 = [1, 2, 3];
var dizi = [2, "Ankara"];
var Renk;
(function (Renk) {
    Renk[Renk["K\u0131rm\u0131z\u0131"] = 1] = "K\u0131rm\u0131z\u0131";
    Renk[Renk["Siyah"] = 2] = "Siyah";
    Renk[Renk["Mavi"] = 3] = "Mavi";
})(Renk || (Renk = {}));
var renk = Renk.Kırmızı;
var renk2 = Renk.Mavi;
console.log(renk);
console.log(renk2);
var deger = "Ankara";
deger = 12;
deger = {};
deger = [];
var deger2 = undefined;
//Void olan metotta return anahtar kelimesi kullanılmaz.
function selamVer() {
    console.log("Merhaba");
}
var Musteri = /** @class */ (function () {
    function Musteri() {
    }
    return Musteri;
}());
var musteri = new Musteri();
musteri.fullName = "Merve Doğan";
