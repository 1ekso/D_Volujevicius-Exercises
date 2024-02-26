// Sukurkite JavaScript objektą žmogus su keliomis savybėmis. Parašykite JavaScript funkciją,
// kuri iteruotų per visus objekto žmogus savybes ir atspausdintų konsolėje savybių reikšmes.
const zmogus = {
    busena: 'dujine',
    svoris: 100,
    ugis: '170cm',
    profesija: 'bedarbis'
}

function gautiViskaKaTikGalim(obj) {
    for(const info in obj){
        console.log(info, obj[info]);
    }
}


gautiViskaKaTikGalim(zmogus);