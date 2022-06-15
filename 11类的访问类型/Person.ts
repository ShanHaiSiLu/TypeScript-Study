/**
 * public: 公共类型的属性，也就是默认创建的属性的类型，允许在类的内部和外部进行调用
 */
class Person {
  name: string;
}

const person = new Person();

person.name = "shj";

// console.log(person.name);

class Person2 {
  name: string;
  public say() {
    // 这里是类的内部访问属性
    return "hellow, " + this.name;
  }
}
const person2 = new Person2();

person2.name = "shj";
// 这里是类的外部访问属性，无论是上一行的赋值还是下一行的输出都是
console.log(person2.say());

/**
 * private 访问属性的意思是，只允许再类的内部被调用，外部不允许调用
 */
