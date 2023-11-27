// Parašykite JavaScript programą, kuri sumaišo masyvo elementus.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

console.log(arr);