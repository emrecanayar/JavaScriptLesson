let sehirler  = ["Ankara","İzmir","İstanbul","Trabzon","Manisa"];

// Aşağıdaki for döngüsü js de yer alan uzun hali.


// for (let index = 0; index < sehirler.length; index++) {
//     const element = sehirler[index];
    
// }

for(let i in sehirler){
    console.log(i);
}

for(let i in sehirler){
    console.log(sehirler[i])
}