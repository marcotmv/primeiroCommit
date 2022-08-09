// Próximo divisível
function numdiv(x, y) {
  let arr = a.split('')

  for (let i = arr.length - 3; i > 0; i -= 3) {

    arr.splice(i, 0, b)

  }
  return arr.join('')
}

console.log(numdiv(1, 23));
console.log(numdiv(23, 23));
console.log(numdiv(7, 3));
console.log(numdiv(-5, 7));
