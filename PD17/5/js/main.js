// function findKids() {
//     let myListForSort = document.getElementById("tevas");
//     const myArray = Array.from(myListForSort.getElementsByTagName('div'));
//     console.log(myArray)
// }

const tevas = document.getElementById("tevas");
const vaikuciai = tevas.children;

for (let i = 0; i < vaikuciai.length; i++) {
    console.log(vaikuciai[i]);
}