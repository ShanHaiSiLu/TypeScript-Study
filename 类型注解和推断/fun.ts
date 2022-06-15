// 函数返回类型的注解
function getTotal(num1: number, num2: number): number {
  return num1 + num2;
}
const total = getTotal(1, 2);
console.log(total);

// 无返回值函数
function sayHell(): void {
  console.log("he wo");
}

// 值的类型比较复杂的数组
// 这时加入一个true到数组中，程序就会报错
const arr: (string | number)[] = [1,'str'];
