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
// rem = rem.filter(item => item !== temp);

// document.getElementById('P1').innerHTML=pmkvy[0]
// document.getElementById('P2').innerHTML=choose[0]
// document.getElementById('P3').innerHTML=pmkvy[1]
// document.getElementById('P4').innerHTML=choose[1]

console.log(choose[3])