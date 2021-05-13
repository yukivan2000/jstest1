var x = 3; 
var y = 4;
var z = x + y; 
console.log(z); 

document.write("<p>hello \n 1</p>");//画面上に出したい要素

console.log('shun'.length);//4;

console.log(12 + 3);//15(+が加算演算子)
console.log(12 + 'A');//12A(+が文字連結)
console.log(12 + 3+'A');//15A
console.log('A' + 12 + 3);//A123
console.log('A' + 12 * 3);//A36
console.log('A' + (12 + 3));//A15

var a = 1; 
var b = 2; 
console.log(a == b); // => false (a と b は等しい)a === b; // => false (a と b は厳密に等しい)
console.log( a != b); // => true (a と b は等しくない)
console.log(a !== b); // => true (a と b は厳密に等しくない)
console.log(a > b); // => false (a は b より大きい)
console.log(a >= b); // => false (a は b より大きいまたは等しい)
console.log(a < b); // => true (a は b より小さい)
console.log(a <= b); // => true (a は b より小さいまたは等しい)

var textbook = { title: "shun とサル", page: 1, author:"shun" }; // 1 行でも書けるし、
textbook = { //複数行でも書ける
 title: "shun とサル", 
 page: 1, 
 author:"shun"
};
 
console.log(textbook.title);
console.log(textbook['title']);

var pref = {
  "hokkaido":"北海道",
  "aomori":"青森",
  "fukushima":"福島"
};

for (var key in pref){
  document.write( `<input type="radio" value= "${key}">${pref[key]}`);
};
//バッククウォートで全体を囲む
//変数は${}で囲むと展開する｡phpの""


function sum(n) { 
  var sum = 0; 
  for(var i = 0; i <= n; i++) { 
  sum += i; 
  } 
  return sum; // 関数が返す値
 } 
  console.log(sum(10)); 

var settimer = (function () { alert(123) }, 2000);


