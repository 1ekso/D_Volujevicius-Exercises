// Turite JavaScritp objektų masyvą, kur kiekvienas objektas atitinka vieną darbuotoją ir turi
// savybes vardas, pavardė, ir atlyginimas. Parašykite funkciją, kuri grąžintų visų darbuotojų,
// kurių atlyginimas didesnis nei nurodyta suma, sąrašą.

const darbuotojai = [
    {Vardas: 'Heich', Pavarde: 'Temelas', atlyginimias: 800},
    {Vardas: 'Tekstas', Pavarde: 'Rektas', atlyginimias: 900},
    {Vardas: 'Realus', Pavarde: 'Realiai', atlyginimias: 1100},
    {Vardas: 'Vardininkas', Pavarde: 'Galininkas', atlyginimias: 1200},
    {Vardas: 'Veiksnys', Pavarde: 'Tarinys', atlyginimias: 1300}
];


function visuDarbuotojuAtlyginimasKurisDidesnisNeiNurudytasSumoje(arr, minAtlyginimas){
    const naujasMasyvas = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i].atlyginimias > minAtlyginimas){
            naujasMasyvas.push(arr[i]);
            console.log(naujasMasyvas)
        }
    }
};


visuDarbuotojuAtlyginimasKurisDidesnisNeiNurudytasSumoje(darbuotojai, 1000);
