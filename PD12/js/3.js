let sIlgis = 400;   //cm
let sAukstis = 300; //cm
let pIlgis = 20;    //cm
let pAukstis = 10;  //cm
let kaina = 0.5;    //eur

let pKiekis = (sAukstis / pAukstis ) * (sIlgis / pIlgis);
let pKaina = pKiekis * kaina;

console.log(`plytu kiekis: ${pKiekis}, plytu kaina: ${pKaina}eur`);