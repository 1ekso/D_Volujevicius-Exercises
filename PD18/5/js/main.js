// Sukurkite JavaScript funkciją, kuri priimtų JavaScript objektą ir grąžintų naują objektą tik
// su tomis savybėmis, kurios tenkina tam tikrą sąlygą (pvz., savybės reikšmė didesnė nei 10).

const knyga = {
    pavadinimas: 'Kaip pavadinti knyga??',
    autorius: 'Visazinis Pasakotojas',
    puslapiu: 248
}

const geresbeKnyga = {
    pavadinimas: 'kaip??',
    autorius: 'anonimas',
    puslapiu: 500
}


function priimtiArNepriimti(obj){
    if(obj.puslapiu <= 250){
        obj.puslapiu += 251
        console.log(obj);
    }   else {
        console.log(obj);
    }
}


function galKitaipReikejoPriimti(obj){
    if(obj.puslapiu < 500){
        delete obj.puslapiu;
        console.log(obj);
    }   else {
        console.log(obj);
    }
}

priimtiArNepriimti(knyga);
priimtiArNepriimti(geresbeKnyga);

galKitaipReikejoPriimti(knyga);
galKitaipReikejoPriimti(geresbeKnyga);
