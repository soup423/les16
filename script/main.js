// let a=10;
// console.log (a);

// const fun1=function(){
//     console.log('test')
// }
// const fun2=fun1;
// fun2();


// if(true){

//     let a=7;
//     console.log(a);
// }

// function count(number){
//     for (let i=0; i<number; i++){
//         console.log(i);
//     }
// }
// count(10);

// function count(number){
// if (number===1){
//     return;
// }
// console.log(number);18
// count(number -1);
// }
// count(10)

// function getAge (callCount){
//     let age=prompt('Сколько лет');
//     if (age==='18'){
//         console.log('success');
//         return;
//     }
//     if (!callCount){
//         alert('test')
//     } return
//     getAge(callCount-1);
// }
// getAge();


// const test=function fun1(count){
// if (count===0){
//     return count;
// }
// return count+fun1(count -1);
// }
// test(7);
// console.log(test(7))

// const user = {
//     name: '123',
//     showName: () => {
//         alert(this.name);
//     }
// }
// user.showName();

// function test(a,b,c){
//     console.log(arguments[0]);
//     console.log(arguments[1]);
//     console.log(arguments[2]);
//     console.log(arguments[3]);
//     console.log(arguments);
// }
// test(1,2,3,4);

// const sum1=Symbol();
// const sum2=Symbol('123');
// const sum3=Symbol('123');
// Symbol.iterator


// function calc() {
//     let number1 = prompt('первое число')
//     number1 = parseInt(number1);
//     if (typeof (number1) !== 'number') {
//         alert('вы ввели не то');
//         return
//     }
//     let mathSymbol = prompt()
//     if (mathSymbol === "+" || mathSymbol === "*" || mathSymbol === "-" || mathSymbol === "/") {
//         let number2 = prompt('первое число')
//         number2 = parseInt(number2);
//         if (typeof (number2) !== 'number') {
//             alert('вы ввели не то');
//             return
//         }
//         switch (mathSymbol) {
//             case '+':
//                 alert(number1 + number2);
//                 break;
//             case '*':
//                 alert(number1 * number2);
//                 break;
//             case '-':
//                 alert(number1 - number2);
//                 break;
//             case '/':
//                 alert(number1 / number2);
//                 break;
//         }
//     }
//     else {
//         alert('хрень')
//     }
// }

// calc();

// function calc(a, b, c) {
//     if (a === undefined) {
//         let one = +prompt('первое');
//         if (typeof a !== 'number' && Number.isNaN(a)) {
//             calc(a, b, c)
//             return;
//         }
//         a = one;
//         calc(a, b, c);
//         return
//     }
//     if (b !== undefined) {
//         let result = +prompt('символ');
//         if (result !== '+' && result !== '-' && result !== '*' && result !== '/') {
//             calc(a, b, c);
//             return
//         }
//         b = result;
//         calc(a, b, c);
//         return
//     }
//     if (c === undefined) {
//         let two = +prompt('первое');
//         if (typeof c !== 'number' && Number.isNaN(c)) {
//             calc(a, b, c)
//             return;
//         }
//         a = two;
//         calc(a, b, c);
//         return
//     }
//     switch {
//         case 
//     }
// }
// calc();

const calc=(function  () {
    return 5+6
})();
console.log(calc)
