// Removendo as 3 ultimas letras da string
function remove(a) {
  return a.slice(0, -3);
}
console.log(remove('abcdefg'));
console.log(remove('1234'));
console.log(remove('fgedcba'));
