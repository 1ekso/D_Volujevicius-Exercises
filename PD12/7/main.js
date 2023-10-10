let begikai = [22, 20, 25, 25];
let ans = 0;
let pirmas = begikai[0];

for(let i = 1; i < begikai.length; i++){
    if (begikai[i] < pirmas) {
        pirmas = begikai[i];
    }
}

for (let i = 0; i < begikai.length; i++) {
  ans += begikai[i];
}
let vid = ans / begikai.length;
let skirtumas = vid - pirmas;

console.log(`greiciausias: ${pirmas}s sekundziu skirtumas: ${skirtumas}s`);
