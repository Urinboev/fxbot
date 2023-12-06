function strategy(klines) {
  let ma13 = ma(klines, 14);
  let ma26 = ma(klines, 26);
  let ma50 = ma(klines, 50);
  let ma200 = ma(klines, 200);

  for (let i = ma200.length - 1; i >= 0; i--) {
    if (ma200[i] > ma50[k] && ma200[i--] < ma50[k--]) {
      console.log("down");
    }
    if (ma200[i] < ma50[k] && ma200[i--] > ma50[k--]) {
      console.log("up");
    }
    // for (let k = ma50.length - 1; k >= i - ma200.length; k--) {
    //   console.log(ma200[i], ma50[k]);
    //   if (ma200[i] > ma50[k] && ma200[i--] < ma50[k--]) {
    //     console.log("down");
    //   }
    //   if (ma200[i] < ma50[k] && ma200[i--] > ma50[k--]) {
    //     console.log("up");
    //   }
    // }
  }
}
