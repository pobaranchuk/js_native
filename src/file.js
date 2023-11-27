let myObj = {
    a: 12,
    b: 14
}

function myFunc(a){
    return this.a + a + this.b
}
const f1 = myFunc.bind(myObj, 3, 4)
console.log(f1())