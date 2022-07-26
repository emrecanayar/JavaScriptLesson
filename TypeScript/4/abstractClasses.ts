abstract class KrediBase{

    kaydet():void{
        console.log("Kaydedildi");
    }

    abstract hesapla():void;
}

class TuketiciKredisi extends KrediBase{
    hesapla(): void {
    console.log("Tüketici kredisine göre hesap yapıldı.")
    }

}

class MortgageKredi extends KrediBase{
    hesapla(): void {
    console.log("Konut kredisine göre hesap yapıldı")
    }

    baskaBirOperasyon(){

    }
}

class AracKredisi extends KrediBase{
    hesapla(): void {
       console.log("Araç kredisine göre hesap yapıldı");
    }

}

//Abstract class lar kendilerinden miras alınan sınıflara ön ayak olmak için oluşturulur.
//Abstract classlar içerisinde abstract anahtar kelimesi ile metotlar ve propertyler tanımlabilir.
//Abstract classlar içerisinde tanımlanan asbtract metotlar veya propertyler miras alınan sınıfın içerisinde mutlaka kullanılmalıdır.
//Abstact olarak işaratlenen metotların gövdevleri abstract class lar içerisinde doldurulmaz. Miras alındıkları sınıflar içerisinde gövdesi doldurulur.

let tuketiciKredisi = new TuketiciKredisi();
tuketiciKredisi.hesapla();

let evKredisi = new MortgageKredi();
evKredisi.hesapla();
