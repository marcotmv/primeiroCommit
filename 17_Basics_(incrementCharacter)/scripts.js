// Inserir caracter de trás para frente
function insertcar(a, b) {
  let result = [];
  let rest = a;
  while (rest.length) {
    result.push(rest.slice(-3));
    rest = rest.slice(0, -3);
  }
  return result.reverse().join(b);
}

console.log(insertcar('1234567', '.'));
console.log(insertcar('abcde', '$'));
console.log(insertcar('zxyzxyzxyzxyzxyz', 'w'));

