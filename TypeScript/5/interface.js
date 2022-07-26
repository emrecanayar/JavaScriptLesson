var Product2 = /** @class */ (function () {
    function Product2() {
    }
    return Product2;
}());
function save(product) {
    // product.name = "Süt" ; //Ekrandan gelen productName değeri
    // product.amount = 20 ; //Ekrandan gelen amount değeri
    // product.price = 15 ;
    // product.stock = 10;
    console.log(product);
}
function save2(product2) {
    console.log(product2.name + " kaydedildi");
}
save({ name: "Süt", amount: 20, price: 15, stock: 10, categoryId: 5 });
