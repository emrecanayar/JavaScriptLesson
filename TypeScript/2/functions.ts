function topla(x, y) {
  return x + y;
}

function topla2(x: number, y: number): number {
  return x + y;
}

let topla3 = function (x: number, y: number): number {
  return x + y;
};

let topla4 = (x: number, y: number): number => {
  return x + y;
};

console.log(topla(2, 3));
console.log(topla("Ankara", 2));
console.log(topla2(3, 2));
console.log(topla3(5, 2));
console.log(topla4(4, 9));

let topla5 = (x: number, y: number = 5): number => {
  return x + y;
};

console.log(topla5(3, 4));

let topla6 = (x: number, y?: number): number => {
  if (y) return x + y;

  return x;
};

console.log(topla6(5, 40));

function davetEt(ilkDavetli: string, ...digerleri: string[]): string {
  return `${ilkDavetli} ${digerleri.join(" ")}`;
}

function davetEtVersion2(...digerleri: string[]): string {
  return `${digerleri.join(" ")}`;
}

//Uzun yolu
// function davetEt(ilkDavetli:string,ikinciDavetli:string,ucuncuDaveleti:string,dorduncuDavetli:string);

console.log(davetEt("Engin", "Merve", "Emre", "Salih"));
console.log(davetEtVersion2("Merve","Doğan","Emre","Can","Ayar"))