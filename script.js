var elements = document.querySelectorAll(".door");

elements.forEach(function(element) {
    element.addEventListener("click", toggleDoor);
});

function toggleDoor() {
    this.classList.toggle("doorOpen");
}
const ece_a = [42, 50, 27, 41, 17];
const ece_b = [56, 27, 46, 31];
let rem = [];
for (let i = 1; i < 72; i++) {
 if (ece_a.includes(i) || ece_b.includes(i) || i === 39 || i === 25) {
    continue;
 }
 rem.push(i);
}

let choose = [];
let pmkvy = [];
let temp = rem[Math.floor(Math.random() * rem.length)];
choose.push(temp);
rem = rem.filter(item => item !== temp);
choose.push(rem[Math.floor(Math.random() * rem.length)]);
pmkvy.push(ece_a[Math.floor(Math.random() * ece_a.length)]);
pmkvy.push(ece_b[Math.floor(Math.random() * ece_b.length)]);

document.getElementById('P1').innerHTML=pmkvy[0]
document.getElementById('P2').innerHTML=choose[0]
document.getElementById('P3').innerHTML=pmkvy[1]
document.getElementById('P4').innerHTML=choose[1]
