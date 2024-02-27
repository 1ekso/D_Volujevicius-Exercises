// Parašykite JavaScript funkciją, kuri kopijuoja JavaScript objektą, leidžiant keisti naujo ob-
// jekto savybes nepaveikiant originalo.

const originalusObjektas = {
    objektoPavadinimas: 'plaktukas',
    paskirtis: 'grynam dauzymui',
    kaina: 12.99
}


function sukuriaObjektoKopijaKurGalimaPakeistiSavybesNepakeiciantOriginalo(obj, savybe, reiksme) {

    const klonas = {
        ...obj
    }

    klonas[savybe] = reiksme


    console.log(klonas);
    console.log(obj);
}


sukuriaObjektoKopijaKurGalimaPakeistiSavybesNepakeiciantOriginalo(originalusObjektas, "kaina", 15.99);
