// Próximo número primo
function proximoPrimo(a) {
  for (let i = 2; i < a; i++) {
    if (a % i === 0) {
      return proximoPrimo(++a);
    }
  }

  return a;
}
console.log(proximoPrimo(38));
console.log(proximoPrimo(7));
console.log(proximoPrimo(115));
console.log(proximoPrimo(2000));