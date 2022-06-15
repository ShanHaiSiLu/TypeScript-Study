class Person {
    public name : string;
    constructor(name: string) {
        this.name = name;
    }
}
/**
 * 下面这种写法效果同上
 */
class Persons {
    constructor(public name : string) {
        this.name == name;
    }
}

const person = new Persons('js');
console.log(person.name)