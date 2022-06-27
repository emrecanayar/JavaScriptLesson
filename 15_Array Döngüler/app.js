//Object Array
const cars = [
  {
    id: 1,
    brand: "Lamborginhi",
    model: "Aventador",
    year: 2022,
  },
  {
    id: 2,
    brand: "Porsche",
    model: "Taycan",
    year: 2021,
  },
  {
    id: 3,
    brand: "BMW",
    model: "760i X-Drive Long",
    year: 2020,
  },
  {
    id: 4,
    brand: "Mercedes Benz",
    model: "Maybach S 650",
    year: 2020,
  },
  {
    id: 5,
    brand: "Chrysler",
    model: "300 CS 3.5",
    year: 2005,
  },
];

//Array Map Metodu
const carModelsAndBrands = cars.map((car) => {
  return `<li>Brand: ${car.brand}, Model: ${car.model}</li>`;
});

console.log(carModelsAndBrands);

//Array.Filter() metodu (Array içerisinden verileri alırken belirli bir şarta göre almamıza olanak sağlar.)

const carsFilter = cars.filter((car) => car.id !== 4);
console.log(carsFilter);

//Arrow function kullanırsak, function içerisindeki data otomatik olarak return edilir.
const cars2020 = cars.filter(function (car) {
  return car.year === 2020;
});

console.log(cars2020);

//Array.Find() metodu belirtilen şarta göre geriye veri döndürür. (Tek bir veri döndürür. Eğer sarta uyan birden fazla veri varsa ilk bulduğu veriyi geriye döndürür.)
// ilgili şartı sağlayan herhangi bir veri bulamadıysa bu sefer geriye undefined döner.

const carsFind = cars.find((car) => car.id > 2);

console.log(carsFind);

const notFoundCar = cars.find((car) => car.id === 7);

console.log(notFoundCar);
