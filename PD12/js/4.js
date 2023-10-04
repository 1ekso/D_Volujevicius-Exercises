let tunnel = 264;   //metrai
let autoGreit = 60; //km/h

autoGreit /= 3.6;
tunnel /= autoGreit;

console.log(`nuvaziuos per ${Math.round(tunnel * 100) / 100} sekundziu`);