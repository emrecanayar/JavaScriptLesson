//Promises

/*
Oluşturduğumuz Promise yapısında ;

işlem başarılı olursa resolve kısmı çalışacak
işlem başarısız olursa reject kısmı çalışacak

*/

const celebrateUsersBirthday = (userName) => {
  return new Promise((resolve, reject) => {
    if (!userName || userName.length < 2) {
      reject("Please enter a valid username");
    }

    resolve(`Happy Birthday ${userName}`);
  });
};

//Promise olarak tanımlanan fonksiyonlar aşağıdaki gibi çağrılır. 
// .then() ile metodun sonucu dinlenir eğer metotdun içerisindeki her şey başarılı olarak çalışırsa yani resolve alanı çalışırsa then metodona bir response düşer ve bu responsu ekrana yazdırabiliriz.

//.catch() ile oluşturduğumuz olduğumuz fonksiyon dinlenir eğer fonksiyonun içerisindeki yapıda bir hata ile karşılaşılırsa yani reject kısmı çalışıyor olursa, reject kısmından dönen bilgi catch blogu içerisinde gösterilir.

const result = celebrateUsersBirthday("Merve")
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
