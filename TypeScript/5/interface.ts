interface Product {
  name: string;
  stock: number;
  amount: number;
  price: number;
  categoryId: number;
}

class Product2 {
  id: number;
  name: string;
  unitPrice: number;
}

function save(product: Product) {
  // product.name = "Süt" ; //Ekrandan gelen productName değeri
  // product.amount = 20 ; //Ekrandan gelen amount değeri
  // product.price = 15 ;
  // product.stock = 10;
  console.log(product);
}

function save2(product2: Product2) {
  console.log(product2.name + " kaydedildi");
}

save({ name: "Süt", amount: 20, price: 15, stock: 10, categoryId: 5 });

interface PersonService {
  save();
}


class PersonPage implements PersonService{
  save() {
    console.log("Interface implement edildi");
  }
  
}

var person = new PersonPage();
person.save();
