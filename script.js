var elements = document.querySelectorAll(".door");

elements.forEach(function(element) {
    element.addEventListener("click", toggleDoor);
});

function toggleDoor() {
    this.classList.toggle("doorOpen");
}
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
const ece_a_boys = [42, 50];
const ece_a_girls=[27,17,41];
const ece_b_boys=[56]
const ece_b_girls=[27,46,31]
let rem_b = [1,2,5,7,10,11,14,19,21,29,34,35,37,40,43,54,55,58,59,65,'le1','le2','le3','le4'];
let rem_g=[3,6,8,9,12,13,15,16,18,20,22,23,28,27,30,32,33,36,38,44,45,47,48,51,53,57,60,61,62,63,64,66,'le5']
// for (let i = 1; i < 72; i++) {
//  if (ece_a.includes(i) || ece_b.includes(i) || i === 39 || i === 25) {
//     continue;
//  }
//  rem.push(i);
// }

let choose = [];
let pmkvy = [];
//ECE-A
shuffleArray(rem_b)
let temp = rem_b[Math.floor(Math.random() * rem_b.length)];
choose.push(temp);
shuffleArray(rem_g)
temp=rem_g[Math.floor(Math.random() * rem_b.length)];
choose.push(temp);
shuffleArray(rem_b)
//ECE-B
temp = rem_b[Math.floor(Math.random() * rem_b.length)];
choose.push(temp);
shuffleArray(rem_g)
temp=rem_g[Math.floor(Math.random() * rem_b.length)];
choose.push(temp);

//pmkvy
shuffleArray(ece_a_boys)
temp = ece_a_boys[Math.floor(Math.random() * ece_a_boys.length)];
pmkvy.push(temp);
shuffleArray(ece_a_girls)
temp=ece_a_girls[Math.floor(Math.random() * ece_a_girls.length)];
pmkvy.push(temp);
shuffleArray(rem_b)
//ECE-B
temp = ece_b_boys[Math.floor(Math.random() * ece_b_boys.length)];
pmkvy.push(temp);
shuffleArray(ece_b_girls)
temp=ece_b_girls[Math.floor(Math.random() * ece_b_girls.length)];
pmkvy.push(temp);


document.getElementById('P1').innerHTML=pmkvy[0]
document.getElementById('P2').innerHTML=choose[0]
document.getElementById('P3').innerHTML=pmkvy[1]
document.getElementById('P4').innerHTML=choose[1]

document.getElementById('P5').innerHTML=pmkvy[2]
document.getElementById('P6').innerHTML=choose[2]
document.getElementById('P7').innerHTML=pmkvy[3]
document.getElementById('P8').innerHTML=choose[3]

console.log(choose[1])