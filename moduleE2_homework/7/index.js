var masiv = [1, 2, 3, 4, 6, 8, 10, 11, 12, 0, "lalala"];

let ZeroNum = 0;
let Even = 0;
let Odd = 0;

for (let h = 0; h < masiv.length; h++){
  let a = masiv[h]
  if (typeof a == 'number'){
    if (a === 0)
    ZeroNum++;
  } else if (a % 2 == 0){
    Even++;
  } else {
    Odd++;
  }
}

console.log("Odd : " + Odd);
console.log("Even : " + Even);
console.log("ZeroNum : " + ZeroNum);