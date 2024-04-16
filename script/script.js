let c = [1, 2] //(0x01)

console.log(`c = ${c}`)

add(c, 3)

console.log(`c = ${c}`)

function add(array, element) {  //(0x01, 3)
    element = element + 2
    array.push(element)
};

let aba = [1, 2]; // 0x01
let ball = 'Ball'; //0x01
let call = aba //0x01

console.log(call) //0x01

call = [1, 2, 3, 4] //0x02?

console.log(call) //0x02??