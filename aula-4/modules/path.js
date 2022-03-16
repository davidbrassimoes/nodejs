const path = require('path')
console.log(path.resolve('./'))

const filePath = path.resolve('.data/file.txt')
console.log(filePath)

const file = path.basename(filePath, '.txt') // segund arg omite a extensão
console.log(file)

const ext = path.extname(filePath)
console.log(ext)

const join = path.join('foo', 'bar')
console.log(join)

// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers.join('_'));

console.log(__dirname)
console.log(path.join(__dirname, '..', '..', 'foo', 'bar'))