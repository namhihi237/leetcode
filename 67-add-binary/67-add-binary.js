/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a = '', b = '') {

  if (a.length > b.length) {
    b = b.padStart(a.length, 0);
  } else if (a.length < b.length) {
    a = a.padStart(b.length, 0);
  }

  a = a.split('').map(e => +e)
  b = b.split('').map(e => +e)

  const c = [];
  let r = 0;
  for (let i = a.length - 1; i >= 0; i--) {
    const v = a[i] + b[i] + r;
    if (v >= 2) {
      c.push(v % 2);
      r = 1;
      if (i == 0) {
        c.push(r);
      }
    } else {
      c.push(v);
      r = 0;
    }
  }
  return c.reverse().join('');
};