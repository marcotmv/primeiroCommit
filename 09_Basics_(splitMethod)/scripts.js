// Incluindo virgulas na String
function splitmethod(a) {
  const string = a + '';
  const strings = string.split('');
  return strings.map(digit => Number(digit))  
}
console.log(splitmethod(10));
console.log(splitmethod(931));
console.log(splitmethod(193278));
