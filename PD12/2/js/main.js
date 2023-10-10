let puodeliai = 7;
let karobackos = 0;

for (let i = 0; i < 7; i++) {
    if (puodeliai >= 3) {
        karobackos += 1;
        puodeliai -= 3;
    }
}

console.log(`dezes: ${karobackos} likutis puodeliu: ${puodeliai}`);
