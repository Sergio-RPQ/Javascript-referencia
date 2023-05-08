// tamanho da string
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let comprimento = text.length;
console.log(comprimento);

// removendo partes da string com slice
//slice() extrai uma parte de uma string e retorna a parte extraída em uma nova string.
//O método leva 2 parâmetros: posição inicial e posição final (fim não incluído).
let text2 = "Apple, Banana, Kiwi";
let part = text2.slice(7, 13);
console.log(part);

let text3 = "Apple, Banana, Kiwi";
let part2 = text3.slice(7);
console.log(part2);

let text4 = "Apple, Banana, Kiwi";
let part4 = text4.slice(-12);
console.log(part4);

let text5 = "Apple, Banana, Kiwi";
let part5 = text5.slice(-12, -6);
console.log(part5);


//substring() é semelhante a slice().
//A diferença é que os valores iniciais e finais menores 
//que 0 são tratados como 0 em substring().
let str6 = "Apple, Banana, Kiwi";
let part6 = str6.substring(7, 13);
console.log(part6);

let str7 = "Apple, Banana, Kiwi";
let part7 = str7.substr(7, 6);
console.log(part7);

let str8 = "Apple, Banana, Kiwi";
let part8 = str8.substr(7);
console.log(part8);

