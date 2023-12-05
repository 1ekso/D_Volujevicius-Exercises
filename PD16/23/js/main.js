function calculateWtv(x, action, y){
    switch (action) {

        case '+':
            return x + y;
        case '-':
            return x - y;
        case '*':
            return x * y;
        case '/':
            return x / y;
        case '**':
            return x ** y;
        case '%':
            return x % y;
        
        default: 
            return ('issidirbineji');
    }
}

console.log(calculateWtv(12, "+", 2));
console.log(calculateWtv(12, "-", 2));
console.log(calculateWtv(12, "*", 2));
console.log(calculateWtv(12, "/", 2));
console.log(calculateWtv(12, "**", 2));
console.log(calculateWtv(12, "%", 2));
console.log(calculateWtv(12, "susprogdink", 2));

