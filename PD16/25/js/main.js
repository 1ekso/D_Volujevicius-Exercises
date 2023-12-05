function guessTheNumber (x) {
    let random = 20; //galvojau su math random daryt bet jau negaleciau patikrint ar veikia :DDD


    if (x < random){
        console.log('pamaitinti reiketu');
    } else if ( x > random) {
        console.log('maziau maitinti reiketu');
    } else if (x === random) {
        console.log('saunuolis');
    } else {
        console.log('gadini struktura');
    }
};


guessTheNumber(19);
guessTheNumber(21);
guessTheNumber(20);
guessTheNumber('nezinau');