function deger(x: number): number {
  return x;
}

function deger2(x: string): string {
  return x;
}



let sayi = deger(10);
console.log(sayi);

let sehir = deger2("Ankara");
console.log(sehir);


//Generic metot tanımlama
function deger3<T>(x: T): T {
  return x;
}

let sayi3 = deger3<number>(2);

// function deger3(x: number): number {
//     return x;
//   }

let sehir3 = deger3<string>("Samsun");

console.log(sayi3);
console.log(sehir3);


//Generic Class Tanımlama
class GenericClass<T> {
  degisken: T;
  fonksiyon(parametre: T): T {
    return parametre;
  }
}

class Deneme {

}

enum TestEnum {
   Ali,
   Veli,
   Elli,
}

let degiskenBool:boolean = true;
let numberDegisken:number = 10;
let stringDegisken:string = "Test";
let objectt = {};
let arrayssss = [];



let sinif = new GenericClass<string>();
let sonuc = sinif.fonksiyon("Trabzon");
console.log(sonuc);