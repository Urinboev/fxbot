function ma(klines, length) {
  let ma = [];

  for (let i = length - 1; i < klines.length; i++) {
    let total_price = 0;
    for (let k = i - length + 1; k <= i; k++) {
      total_price += Number(klines[k][4]);
    }

    let el = total_price / length;
    ma.push(el);
  }

  return ma;
}
