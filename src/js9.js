// лексическое окружение, замыкание, рекурсия
// globalLE{} -> null

// const globalLexicalEnvironment = {
// 	environmentVariables: {

// 	},
// 	outer: null
// }

//globalLE {startEngine: Function} -> null

// let car = "bmw"; //globalLE{startEngine: Function, car: 'bmw'} -> null

// function startEngine() {
//   // outer: globalLE
//   // startEngineLE {}
//   console.log(`Start ${car}`);
// }

// startEngine(); //globalLE{startEngine: Function, car: 'bmw'} -> null

// car = "audi"; //globalLE{startEngine: Function, car: 'audi'} -> null

// startEngine();

// const startEngine2 = function () {
//   //globalLE{startEngine: Function, car: 'bmw', startEngine: Function} -> null
//   console.log(`Start ${car}`);
// };
// startEngine2();
// startEngine();

// car = "audi";

// startEngine();

//gLE {}

// const a = 10; //gLE {foo: Func, foo2: Func, a: 10}
// const b = 20; //gLE {foo: Func, foo2: Func, a: 10, b: 20}
// const c = 50; //gLE {foo: Func, foo2: Func, a: 10, b: 20, c = 50} -> null
//
// function foo() {
//   // fooLE{a: 30, b: 40, bar: Func} -> gLE
//   const a = 30;
//   const b = 40;
//   console.log(a);
//   foo2();
//   const bar = () => {
//     //{} -> fooLE
//     console.log(c);
//   };
//   bar();
// }

// foo();

// function foo2() {
//   // foo2LE{} -> gLE
//   console.log(b);
// }

//gLE {} -> null
// let count = 0;
// const counterCreator = () => {
//   //gLE {counterCreator: Func} -> null
//   //counterCreatorLE1 {count: 0} -> gLE
//   //counterCreatorLE2 {count: 0} -> gLE
//   let count = 0;

//   return () => {
//     //{} -> counterCreatorLE1
//     //{} -> counterCreatorLE2
//     // let count = 0;
//     console.log(++count);
//   };
// };

// // counterCreator()(); //gLE {counterCreator: Func, counter: Func} -> null
// // counterCreator()(); //gLE {counterCreator: Func, counter: Func} -> null
// // counterCreator()(); //gLE {counterCreator: Func, counter: Func} -> null

// const counter = counterCreator();
// const counter2 = counterCreator();

// counter();
// counter();
// counter();

// counter2();
// counter2();
// counter2();

// 2(4) -> 2 * 2(3) -> 2 * 2 * 2(2) -> 2 * 2 * 2 * 2(1)
// let count = 0;
function pow(x, n) {
  if (n === 1) {
    return x;
  }
  return x * pow(x, n - 1);
}

// console.log(pow(2, 4)); // 16

// faq(5) -> 1 * 2 * 3 * 4 * 5 * 6

function faq(x) {
  if (x === 1) {
    return x;
  }
  return x * faq(x - 1);
}

// console.log(faq(6));

// fib(6) -> 0 + 1 + 1 + 2 + 3 + 5

function fib(x) {
  if (x <= 1) {
    return x;
  }
  return fib(x - 1) + fib(x - 2);
}

console.log(fib(7));
