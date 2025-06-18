// 1
let promise1 = new Promise((resolve, reject) => {
    if (isNaN(5)) {
        resolve("promise1 resolve");
    } else reject("promise1 reject");
});
let promise2 = new Promise((resolve, reject) => {
    if (isNaN("b")) {
        resolve("promise2 resolve");
    } else reject("promise2 reject");
});
let promise3 = new Promise((resolve, reject) => {
    if (isNaN(3)) {
        resolve("promise3 resolve");
    } else reject("promise3  reject");
});

Promise.any([promise1, promise2, promise3]).then(value => {
    // console.log(value);
});





// 2
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    };

    getInfos() {
        return `It is ${this.name} and it is ${this.age} years old!`
    };
};

// let obj1 = new Animal("reks", 2);
// console.log(obj1.getInfos());
// let obj2 = new Animal("bobik", 1);
// console.log(obj2.getInfos());
// let obj3 = new Animal("mushuk", 3);
// console.log(obj3.getInfos());





// 3
class People {
    constructor(name) {
        this.name = name;
    };

    static hi (x){
        return `hi ${x}`;
    };
    static bye (x){
        return `bye ${x}`;
    };
    static welcome (x){
        return `welcome ${x}`;
    };
};

// let person = new People("Ahmad");
// console.log(People.hi(person.name));
// console.log(People.bye(person.name));
// console.log(People.welcome(person.name));





// 4
class Bank {
    #sum = 1000;

    get getSum(){
        return this.#sum;
    };
};

let bank = new Bank();
// console.log(bank.getSum);