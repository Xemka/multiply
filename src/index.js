module.exports = function multiply(first, second) {
  var res = BigInt(first) * BigInt(second);
  return (res + '');
}
