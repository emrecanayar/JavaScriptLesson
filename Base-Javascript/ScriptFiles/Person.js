var Person = (function () {
  function Personel(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  //Personel Class'ına ait FullName adında bir metot. (property)
  Personel.prototype.FullName = function () {
    if (this.surname) {
      return `${this.name} ${this.surname}`;
    } else {
      return this.name;
    }
  };
 
  return Personel;
})();
