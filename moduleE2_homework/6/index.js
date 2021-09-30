let Masiv = [33, 33, 33];
let a = Masiv[0];
let b = 0;
for (let f = 1; f < Masiv.length; f++){
  if (Masiv[f] == a){
    b++;
  }
}
if (b < Masiv.length - 1) {
  console.log("Не все элементы одинаковы")
} else {
  console.log("Все элементы массива одинаковы!")
}