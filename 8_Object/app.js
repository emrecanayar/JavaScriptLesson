//Obje oluşturmak için süslü parantez kullanılır. İçerisinde ise özellikleri(property) tanımlayabiliriz.

let value;

let programmer = {
  fullName: "Emre Can Ayar",
  age: 29,
  email: "emrecan.ayar@hotmail.com",
  langs: ["C#", "JavaScript", "React", "ASP.NET"],
  address: {
    city: "İstanbul",
    street: "121 Sokak",
    district: "Ayazağa",
  },
  work: function () {
    console.log("Programmer working!");
  },
};

value = programmer;

//İlgili nesneden özellik alma
value = programmer.email; //programmer nesnesinin email özelliğini almak.
value = programmer["age"]; //farklı bir yoldan programmer nesnesinin email özelliğini almak.
value = programmer.address.city; //Obje içerisindeki objeye erişmek
programmer.work(); //Obje içerisindeki fonksiyona erişmek.

//Array Objeler

const programmers = [
  { name: "Emre Can Ayar", age: 29 },
  { name: "Merve Doğan", age: 25 },
  { name: "Mert Can Ayar", age: 27 },
];

value = programmers[1].name;

console.log(value);
