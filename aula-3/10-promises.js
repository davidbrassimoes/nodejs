const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const number = Math.round(Math.random() * 100)
        const isPair = number % 2 === 0

        if (isPair) {
            resolve(`Generated number is pair (${number})`)
        } else {
            reject(new Error(`Error! Number is ${number}`))
        }
    }, 3000)
})

promise
    .then(message => console.log(message))
    .catch(error => console.log(error.message))

console.log('(Waiting...)')

const p1 = new Promise((resolve, reject) => setTimeout(() => resolve([1, 2, 3, 4, 5]), 1000))
const p2 = new Promise((resolve, reject) => setTimeout(() => resolve({ name: 'Mary', lastName: 'Smith' }), 3000))
const p3 = 'Hello World'
const p4 = Promise.resolve('P4 resolved')

Promise.all([p1, p2, p3, p4])
    .then(res => {
        console.log(res)
        const { 2: secondResult } = res
        console.log(secondResult)
    })
    .catch(errors => console.log(errors))


/* class Matematica {
    static soma(n1, n2) {
        return n1 + n2
    }
}

console.log(Matematica.soma(2, 4))

class Student {
    static instances = 0

    static numberOfStudents() {
        return Student.instances
    }
    constructor() {
        Student.instances++
    }
}

const s1 = new Student()
const s2 = new Student()

console.log(Student.numberOfStudents()) */