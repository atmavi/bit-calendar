export default class Dog {
    constructor(name, age) {
        this.name= name;
        this.age= age;
    }

    bark= ()=> console.log('Aw aw');
    greet= ()=> console.log(`My name is ${this.name}... arff arff.`);
}