let sIlgis = 4 * 100;   
let sAukstis = 3 * 100; 
let pIlgis = 20;    
let pAukstis = 10;   
let plytu = 0;

for (let a = 0; a < sIlgis; a += pIlgis) {
  for (let b = 0; b < sAukstis; b += pAukstis) {
    plytu++;
  }
}

let kaina = plytu * 0.5;

console.log(`plytu kiekis: ${plytu}, plytu kaina: ${kaina}eur`);


