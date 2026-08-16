function createMultiplier(number){

    return number2 => {
        return number2 * number 
    }
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5));
console.log(triple(5));