interface Gril {
    // 常规属性
    name: string;
    age: number;
    // 存在性可选属性，也就是可有可无不做要求的属性
    bust ?: number;
    // 类型可选的属性，也就是数据类型不强制要求的属性（键名未被指定，此处仅要求键名的类型是字符串类型，未作其他要求）
    // 这里是[proase: string]仅表示简明是字符串类型的数据
    [proase: string]: any;
    // 函数类型的数据，仅对返回值的类型做出限制
    say(): string
}

// 此时的Gril类型的要求是必须有name和age属性，bust属性不做要求，未命名属性不做要求，say要求键值必须是一个返回字符串的函数
const gril1: Gril = {
    name: '小红',
    age: 18,
    say() {return 'heoolw'}
}
const gril2: Gril = {
    name: '小红',
    age: 18,
    bust: 50,
    sex: '女',
    say() {return 'hellow'}
}

// 继承.
// 让类受到接口的限制
class grils implements Gril {
    name="小兰"
    age=18
    bust=55
    sex='女'
    say() {return 'hellow'}
}


// 让一个接口来继承接口，此时新的接口必须符合旧类型的所有需求，新的要求再写在新的接口中
interface Teacher extends Gril {
    teach() : string;
}

// 依据新的接口构造的数据要符合新的要求也要符合旧的要求
const teach : Teacher = {
    name: '小红',
    age: 18,
    bust: 50,
    sex: '女',
    say() {return 'hellow'},
    teach() {return '教导'}
}