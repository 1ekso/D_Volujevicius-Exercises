const knyga = {
    pavadinimas: 'Kaip pavadinti knyga??',
    autorius: 'Visazinis Pasakotojas',
    puslapiu: 248
}

function gautiVisaInformacijaIsKnygos(obj) {
    console.log(obj.pavadinimas);
    console.log(obj.autorius);
    console.log(obj.puslapiu);
};

gautiVisaInformacijaIsKnygos(knyga);