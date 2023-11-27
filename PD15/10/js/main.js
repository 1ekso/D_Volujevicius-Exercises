// Parašykite JavaScript programą, kuri pašalina pasikartojančius elementus iš masyvo (ne-
//     paisykite didžiųjų ir mažųjų raidžių).

let arr = [1, 1, 1, 5, 6, 6, 8, 7, 4];


for (let i = 0; i < arr.length; i++){
    for(let y = i + 1; y < arr.length; y++){
        if(arr[i]===arr[y]){
            arr.splice(y, 1);
            y--;
            
        // console.log(arr);
        }
    }
}

console.log(arr);