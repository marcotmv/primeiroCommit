function inverterString(a, b) {
  let f = b.split('').reverse().join('');
  let c = a + f;
  let d = c.replace('%','');
  let g = d.charAt(0).toUpperCase() + d.slice(1);
  return g;
}
console.log(inverterString('java', 'tpi%rcs'));
console.log(inverterString('c%ountry', 'edis'));
console.log(inverterString('down', 'nw%ot'));