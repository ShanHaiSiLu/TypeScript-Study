// 基础静态类型：包括且不限于null,undefinde,symbol,boolean，void，num, string
// 这样定义下str就锁定为了字符串类型且类型不可改变
let str: string = "strs";

/**
 * 上面代码使用的静态类型是js的基础类型，在此基础上还可以对象类型
 * 包括数组、对象之类
 */

interface book {
  bname: string;
  time: number;
}

const times: book = {
  bname: "时间简史",
  time: 15,
};

console.log(times.time);

// 这样定义表示books是一个数组，且数组的每一项都是字符串
const books: string[] = ["1", "2", "3"];
console.log(books);

// 用类来自定义变量
// 这个意思就是clsa必须是一个Person类对应的对象才可以。
class Person {}
const clsa: Person = new Person();

// 我们还可以定义一个函数类型，并确定返回值。代码如下
const clabooks: () => string = () => {
  return "sf";
};

/**
 * 对象类型的形式：
            对象类型
            数组类型
            类类型
            函数类型
    这几种形式我们在TypeScript里叫做对象类型。
 */
