/**
 * 普通的数组类型
 */
type ar = string | number;

// 对于普通的类型的数组类型，下面这两中类型的写法都是正确的，只要数据类型是正确的，定义的变量就没有问题
let arr: ar[] = ['sre','sads','asd',18];
let arrs: ar[] = ['sre','sads',18,'asd'];

/**
 * 元组类型
 * 其实用的已经很少了
 */
type csv = [string, string, number];
// 这样是没有问题的
let csv1: csv[] = [['str','ffg',15],['ffg','rrt',15]];
// 但是这样就会出问题，各种数据类型的数据出现的顺序和定义的类型的顺序不一致也会导致错误的发生
let csv1: csv[] = [['str',15,'ffg'],['ffg',15,'rrt']];
