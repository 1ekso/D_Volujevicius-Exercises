let egles = [167, 134, 145, 156, 155, 176];
let ans = 0;

for (let i = 0; i < egles.length; i++) {
  ans += egles[i];
}
let vid = ans / egles.length;

console.log(`egliu vidutinis aukstis yra: ${vid}`);



// let vid = egles.reduce((a, b) => a + b, 0) / egles.length;
// console.log(`vidutinis egliu aukstis ${Math.round(vid*10)/10}`);
// netinka :DDD