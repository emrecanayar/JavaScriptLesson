$(document).ready(function () {
  //Global değişkenler
  var colors = []; //Ekranda ilk başta yer alan renkleri tutmak için oluşturulmuştur.
  var index = 0;
  var time = 0;

  $("p").click(function () {
    colors = []; //aqua,blue,green,purple,pink,orange
    index = 0;
    time = 0;

    //İlgili kutuya tıklandığında tıklanan kutunun rengini alır.
    var color = $(this).css("background-color");

    //Sayfadaki bütün p elementlerini alır ve bir collection(dizi) içerisine atar.
    var elemanlar = document.getElementsByTagName("p");

    //Sayfadaki p elementlerinin sayısı kadar döneriz ve sırasıyla her elementin rengini alıp daha önceden oluşturduğumuz colors arrayine ekleriz.
    for (let i = 0; i < elemanlar.length; i++) {
      var elemanColor = $(elemanlar[i]).css("background-color");
      colors.push(elemanColor);
    }

    //Time hesaplaması yapılır (Rengi değişen box ların geriye döndürken buradaki time değeri hızında döneceğiz.)
    time = elemanlar.length * 600;

    //İlk p elementine tıkladıktan sonra bütün p lerin arka planı beyaz olarak atınır.
    $("p").css("background-color", "white");

    var timer = setInterval(() => {
      if (index == elemanlar.length) {
        clearInterval(timer);
      }

      $(elemanlar[index]).css("background-color", color);
      index++;
    }, 500);

    //Bütün kutucuklar ilk baştaki rengine colors arrayinden gelen değelerle doldur.
    var times = setTimeout(function () {
      index = 0;
      var secondTimer = setInterval(() => {
        if (index == elemanlar.length) {
          clearInterval(secondTimer);
        }

        $(elemanlar[index]).css("background-color", colors[index]);
        index++;
      }, 500);
    }, time);
  });
});
