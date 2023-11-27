// Parašykite JavaScript programą, kuri pašalina pasikartojančius elementus iš masyvo (ne-
//     paisykite didžiųjų ir mažųjų raidžių).

let arr = [1, 1, 1, 5, 6, 6, 8, 7, 4];
let norim = 1;
let turim = 0;

for (let i = 0; i < arr.length; i++){
    if (arr[i] === norim){
        turim++;
    }
}

console.log(turim);