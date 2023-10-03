let pir = prompt("pamoku skaicius pirmadieni: ", "5");
let ant = prompt("pamoku skaicius antradieni: ", "6");
let tre = prompt("pamoku skaicius treciadieni: ", "4");
let ket = prompt("pamoku skaicius ketvirtadieni: ", "5");
let pen = prompt("pamoku skaicius penktadieni: ", "4");

let total = +pir + +ant + +tre + +ket + +pen;
total = total * 45;

alert(`prarasi ${total} minuciu per savaite`);