function convertToCelsius(farens){
    return (farens - 32) * 0.5556;
};

function createMessage(farens, cels){
    let message = '';
    const numFarens = farens * 1;

    if(numFarens === 32){
        message = 'that shit is literally frozen';
    } else if(numFarens === 98){
        message = 'thats literally Nick Lache';
    } else if(numFarens === 100){
        message = 'you must be in hell';
    }
    return `${farens} farenheit is ${cels} degrees celsius smart guy. ${message}`;
};

function rand(limit){
    return Math.round(Math.random()*limit);
}


let inputFaerns = prompt('enter the temparture in Farenheit degrees and we will convert it to degrees Celsius');
let convertedCelsius = convertToCelsius(inputFaerns);
let output = createMessage(inputFaerns, convertedCelsius);
console.log(output);
console.log("Converted celsius: ", convertedCelsius);

let randomFarens = rand(100);
convertedCelsius = convertToCelsius(randomFarens);
output = createMessage(randomFarens, convertedCelsius);
console.log(output);

randomFarens = rand(100);
convertedCelsius = convertToCelsius(randomFarens);
output = createMessage(randomFarens, convertedCelsius);
console.log(output);


console.log('hello world');