let a = Number(prompt("a ni kiriting="))
//let b=Number(prompt("b ni kiriting="))
if (a > 10) {
    console.log("a katta 10dan")
}
else {
    console.log("a kichik 10dan")
}
let a1 = Number(prompt("a1 ni kiriting="))
let b1 = Number(prompt("b1 ni kiriting="))
if (a1 == b1) {
    console.log("Teng sonlar")
}
else {
    console.log("Sonlar teng emas")
}
let a2 = Number(prompt("a2 ni kiriting="))
if (a2 % 5 == 0) {
    console.log("5ga bo'linadi")
}
else {
    console.log("bo'linmaydi")
}
let a3 = Number(prompt("a3 ni kiriting="))
let b3 = Number(prompt("b3 ni kiriting="))
let c3 = Number(prompt("c3 ni kiriting="))
if (a3 > b3 && a3 > c3) {
    console.log("Max a3")
}
else if (b3 > a3 && b3 > c3) {
    console.log("Max b3")
}
else {
    console.log("max c3")
}
let harorat = Number(prompt("haroratni kiriting"))
if (harorat < 0) {
    console.log("Muzlaydi")
}
else {
    console.log("oddiy holat")

}
for (let i = 1; i <= 30; i++) {
    console.log(i);
}
for (let i1 = 1; i1 <= 50; i1++) {
    if (i1 % 2 == 0) {
        console.log(i1);
    }

}