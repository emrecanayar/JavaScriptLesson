const name = "Emre Can Ayar";
const department = "Bilişim";
const salary = 4000;


//Basit bir fonksiyon örneği
function concatenateStrings(firstString,lastString){
    return `${firstString} ${lastString}`;
}



let fullName = "İsim : " + name + "\n" + "Departman : " + department + "\n" + "Maaş : " + salary;

 fullName = `İsim:${name}\nDepartman:${department}\nMaaş:${salary}`;

 console.log("Hoş geldin " + name );
 console.log(`Hoş Geldin ${name} sjahjdhsajhd hajhsdjhjsahjh  ${department}`);


//Oluşturduğum fonksiyonu kullanma

fullName = concatenateStrings("Emre Can","Ayar")

console.log(fullName);