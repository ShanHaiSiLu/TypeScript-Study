/**
 * 创建一个类
 * 关键字：class
 * 注意：class关键字和类名中间不需要也不能要任何符号，比如等号之类的符号
 * 类中不同的属性中间用分号(;)作为间隔，基于ES6此处的分号可以省略
 * 类中的键值是函数的，其中的this默认指向当前这个类本身，使用了ES6箭头函数的不做讨论
 */

class Lady {
    content = 'hellow'
    say() {
        return this.content
    }
}
const lady1 = new Lady()
// console.log(lady1.say())

// 类的继承
// 子类中包含父类的所有内容，可以直接进行调用
class LadyPlus extends Lady {
    love() {
        return 'love'
    }
};
const lady2 = new LadyPlus();
console.log(lady2.say())
console.log(lady2.love())

// 类的重写
class Ladys extends Lady {
    say() {
        return 'word love me'
    }
}
const lady3 = new Ladys();
console.log(lady3.say())


// super关键字：调用父类中被重写覆盖的方法
class LadySuper extends Lady {
    say() {
        return super.say() + ' word'
    }
}
const lady4 = new LadySuper();
console.log(lady4.say())