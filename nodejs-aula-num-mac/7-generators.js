/* function* doSomething(){
    console.log('Start process...');
    yield;
    console.log('Resume process...');
    yield;
    console.log('Complete!!!');
}

const generator = doSomething();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next()); 

while (!generator.next().done){}
 */
/* function* sequenceNumber(startNumber = 1){
    let number = startNumber;
    while (true){
        yield number++;
    }
}

const sequence = sequenceNumber(10);

console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value); */


function* getStockPrice(symbol){
    while(true){
        yield ((Math.random()*100).toFixed(2));
        console.log(`Resuming for symbol ${symbol}`);
    }
}

const priceGenerator = getStockPrice('BTC');
const limitPrice = 15;
let price = priceGenerator.next().value;

while (price > limitPrice){
    price = priceGenerator.next().value;
    console.log(`The generator returned ${price}`);
}

console.log(`Buying stocks at ${price}`);

const crypto = require('crypto');

console.log(crypto.randomUUID());