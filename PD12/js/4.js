const metraiPerS = 1000 / 3600;
let tunnel = 264;   //metrai
let autoGreit = 60; //km/h
let mps = 0;

while (autoGreit > 0) {
    mps += metraiPerS;
    autoGreit--;
}

let ans = tunnel / mps;

console.log(Math.round(ans * 100) / 100);
