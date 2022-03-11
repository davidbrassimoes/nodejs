// ES5

// function Person(name){
//     this.name = name;
// }

// Person.prototype.printName = function() {
//     console.log(this.name, this.lastName);
// }

// ES6

class Person {
    #name;
    #lastName = 'Doe';
    #age;

    constructor(name) {
        this.#name = name;
    }

    printName() {
        console.log(this.#name, this.#lastName, this.#age);
    }

    getName() {
        return this.#name;
    }
    getLastName() {
        return this.#lastName;
    }

    setName(name) {
        this.#name = name;
    }

    getAge() {
        return this.#age;
    }
    // setAge(age) {
    //     if (age < 0) {
    //         return console.log('age cannot be below 0');
    //     } else if (age > 110) {
    //         return console.log('age cannot be above 110');
    //     } else {
    //         this.#age = age;
    //     }
    // }
    setAge(age) {
        if (age < 0 || age > 120) {
            throw new Error(`Invalid age (${age})`);
        }
        this.#age = age;
    }
}

class Student extends Person {
    #school;

    constructor(name, lastName, school) {
        super(name, lastName);
        this.#school = school;
    }

    getSchool() {
        return this.#school;
    }

    setSchool(school) {
        this.#school = school;
    }

    study() {
        console.log(`${this.getName()} ${this.getLastName()} study at ${this.#school}`);
    }
}

Person.prototype.lastName = 'Doe';

const p1 = new Student('John', 'Silva', 'ETIC');
p1.setName('Matateu');
p1.study();

try {
    p1.setAge(50);
} catch (e) {
    console.log(e.message);
}

console.log(p1.getAge());


// const p2 = new Person('Mary');
// p2.printName();