const originalusObjektas = {
    objektoPavadinimas: 'plaktukas',
    paskirtis: 'grynam dauzymui',
}

const labiauOriginalusObjektas = {
    objektoPavadinimas: 'plaktukas',
    paskirtis: 'grynam dauzymui',
}


const nelabaiOriginalusObjektas = {
    objektoPavadinimas: 'plakatukas',
    paskirtis: 'grynai statybai',
}


function rastiArObjektaiPanasus(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2)
}


console.log(rastiArObjektaiPanasus(originalusObjektas,nelabaiOriginalusObjektas));
console.log(rastiArObjektaiPanasus(originalusObjektas,labiauOriginalusObjektas));
