function capitaliseFirstOfEach(sentence) {
    let words = sentence.split(' ');
  
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
  
    return words.join(' ');
}
  
let pvzSentence = "jauciuos alkanas tai suvalgysiu kiausa";
console.log(capitaliseFirstOfEach(pvzSentence)); 