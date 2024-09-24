module.exports = function calculateChange(total, cashPaid) {
  const coins = [5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];  // in units of 1p
  let change = [];
  let remainder = cashPaid - total;

  coins.map(coin => {
    while(remainder >= coin) {
      change.push(coin);
      remainder -= coin;
    }
  });
  return change;
};