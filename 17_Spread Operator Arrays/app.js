//Spread Operator

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

const newCars = [
  { id: 6, brand: "Tofaş", model: "Şahin SLX", year: 1996 },
  { id: 7, brand: "Toyota", model: "Coralla", year: 2002 },
];

const carsCopy = [...cars,...newCars];

console.log(cars);
console.log(newCars);
console.log(carsCopy);