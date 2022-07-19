function selamVerTypeScript(isim: string) {
  return "Merhaba " + isim;
}

let mesajTypeScript = selamVerTypeScript("Merve");

console.log(mesajTypeScript);

let sayi: number = 12;
sayi = 10;
sayi = 10.4;

let sehir: string = "Adana";
sehir = "Ankara";
sehir = "İstanbul";

let dogruMu: boolean = true;
dogruMu = false;
dogruMu = true;

let sayilar: number[] = [1, 2, 3, 4, 5];
let sayilar2: Array<number> = [1, 2, 3];

let dizi: [number, string] = [2, "Ankara"];

enum Renk {
  Kırmızı = 1,
  Siyah = 2,
  Mavi = 3,
}

let renk: Renk = Renk.Kırmızı;
let renk2: Renk = Renk.Mavi;

console.log(renk);
console.log(renk2);

let deger: any = "Ankara";
deger = 12;
deger = {};
deger = [];

let deger2: void = undefined;

//Void olan metotta return anahtar kelimesi kullanılmaz.
function selamVer(): void {
  console.log("Merhaba");
}

class Musteri {
  fullName: string;
}

var musteri = new Musteri();

musteri.fullName = "Merve Doğan";