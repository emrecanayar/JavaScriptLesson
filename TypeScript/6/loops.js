var sehirler = ["Ankara", "İzmir", "İstanbul", "Trabzon", "Manisa"];
// Aşağıdaki for döngüsü js de yer alan uzun hali.
// for (let index = 0; index < sehirler.length; index++) {
//     const element = sehirler[index];
// }
for (var i in sehirler) {
    console.log(i);
}
for (var i in sehirler) {
    console.log(sehirler[i]);
}

