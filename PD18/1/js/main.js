const studentas = {
    Vardas: 'Vytautas',
    Pavarde: 'Mineralinis',
    Subrendimas: 49,
    mineralinisVanduo: function() {
        return this.Vardas + ' ' + this.Pavarde;
    }
}

console.log(studentas.mineralinisVanduo());