let dienos = [5, 6, 4, 5, 4];
let paskaitos = 0;
let laikas = 0;
for (let i = 0; i < dienos.length; i++) {
    paskaitos += dienos[i];
    laikas += dienos[i] * 45;
}

console.log(`prarasi ${laikas} minuciu per savaite del ${paskaitos} pamoku`);