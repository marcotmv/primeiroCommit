// Contagem de vezes de a em b
function numVezes(a, b) {
  return b.split(a).length - 1

}

console.log(numVezes('m', 'how many times does the character occur in this sentence?'));
console.log(numVezes('h', 'how many times does the character occur in this sentence?'));
console.log(numVezes('?', 'how many times does the character occur in this sentence?'));
console.log(numVezes('z', 'how many times does the character occur in this sentence?'));

