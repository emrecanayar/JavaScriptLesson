//var ile değişken tanımlama
var name1 = "Emre Can Ayar";
var name1 = "Emre Can";
console.log(name1);



//let ile değişken tanımlama (let ile değişken tanımlama daha güvenlidir. Aynı isimle "var" da olduğu gibi değişken tanımlamaya imkan vermez.)
let name = "Emre Can Ayar"
console.log(name);
name = "Emre";
console.log(name);


//const - değişken tanımlama (sabit değer tanımlamak için kullanılır. Tekrardan değer atanmasına izin verilmez.)
const name3 = "Emre Can";
console.log(name3);


const numbers = [1,2,3,4,5];
const names = ["Emre Can","Merve","Büşra","Mert"]
// numbers = [1,2,3,4,5,6] => yeni değer atanmasına izin vermez.
console.log(numbers);
console.log(names);
numbers.push(6)
names.push("Hakkı");
console.log(numbers);
console.log(names);

