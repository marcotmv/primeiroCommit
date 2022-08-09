function Myfunction(str) {
  const arr = [...str];
  const correctedArray = arr.map(e => String.fromCharCode(e.charCodeAt()+1));
  return correctedArray.join('');
};
console.log(Myfunction("bnchmf"));
console.log(Myfunction("bgddrd"));
console.log(Myfunction("sdrshmf"));