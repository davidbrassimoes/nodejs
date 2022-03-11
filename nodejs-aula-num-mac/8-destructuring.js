function getStock(){
    return {
        symbol: 'AAPL',
        price: 14.6,
        createdAt: Date.now(),
        //limit: 30
    };
}

// ES5
// const stock = getStock();
// const symbol = stock.symbol;
// const price = stock.price;


// ES6

const {symbol, price: value, createdAt, limit = 100} = getStock();
console.log(symbol, value, createdAt, limit);

const [name1, name2] = ['John', 'Mary'];
console.log(name1, name2);

const customers = ['John', 'Jane', 'Mary', 'Lou'];
const {3: x} = customers;
console.log(x);

const [first, second, ...others] = customers;

console.log(`The first customer is ${first}, the second customer is ${second}`);
console.log(`Other customers are ${others}`);