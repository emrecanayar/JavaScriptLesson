class Ev {
  odaSayisi: number;
  pencereSayisi: number;
  kat: number;

    // constructor(odaSayisi: number, pencereSayisi: number, kat: number) {
    //   this.odaSayisi = odaSayisi;
    //   this.pencereSayisi = pencereSayisi;
    //   this.kat = kat;
    // }

  yemekYe() {
    console.log(this.kat + " katlı evde " + "yemek yiyildi");
  }
  //TypeScript te eğer propertylerin başında erişim belirleyicleri kullanmazsanız default olarak public olurlar.

  //public   => public olarak tanımlanan propertyle veya değişkenler proje içerisinde her yerden ulaşılabilir.
  //private  => private olarak tanımlanan propertyler veya değişkenler sadece ilgili dosya içerisinden ulaşılabilir.
  //protected => protected olarak tanımlamam propertyler veya değişkenler ilgili dosya içerisinden erişelilir ve dışarıya kapılıdır. Fakat ilgili class başka bir classa miras veriyorsa tanımlanan o property miras alınan class da da kullanılabilir.
}

let ev = new Ev();
ev.kat = 5;
ev.odaSayisi = 3;
ev.pencereSayisi = 15;

ev.yemekYe();

console.log(ev);

class Kisi {
  private _isim: string;

  get isim(): string {
    return this._isim;
  }

  set isim(ad: string) {
    this._isim = ad;
  }

  public soyisim: string;
  public yas: number;
}

let kisi = new Kisi();
kisi.isim = "Emre Can";
console.log(kisi.isim);

// SOAP Servisi => Servis Tipi
// Web Services => Genel Adı
// XML => Veri Tipi

// Rest Servis => Servis Tipi
// API => Genel Adı
// Json => Veri Tipi

class Musteri extends Kisi {
  public email: string;

  satisYap() {
    console.log("Satış Yapıldı");
  }
}

var musteri = new Musteri();
musteri.isim = "Emre Can";
musteri.soyisim = "Ayar";
musteri.yas = 29;
musteri.email = "emrecan.ayar@hotmail.com";
musteri.satisYap();

class Personel extends Kisi {
  public userName: string;

  maasOde() {
    console.log("Maaş ödendi");
  }
}

var personel = new Personel();
personel.isim = "Merve";
personel.soyisim = "Doğan";
personel.yas = 25;
personel.userName = "merve.dogan";
personel.maasOde();

class Product {
  id: number;
  productName: string;
  description: string;
  quantity: number;
  price: number;
}

var product = new Product();
