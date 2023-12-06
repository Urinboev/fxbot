const pairs = [
  "ANKRUSDT",
  // "ETHUSDT",
  // "LTCUSDT",
  // "TRXUSDT",
  // "LINKUSDT",
  // "ADAUSDT",
  // "BNBUSDT",
  // "ATOMUSDT",
  // "IOTAUSDT",
  // "VETUSDT",
  // "IOSTUSDT",
  // "DOGEUSDT",
  // "RLCUSDT",
  // "SOLUSDT",
  // "ICXUSDT",
  // "UNIUSDT",
  // "FTMUSDT",
  // "MATICUSDT",
  // "REEFUSDT",
  // "1INCHUSDT",
];

async function makeSignal() {
  for (let i = 0; i < pairs.length; i++) {
    fetch(
      "https://fapi.binance.com/fapi/v1/klines?symbol=" +
        pairs[i] +
        "&interval=1m&limit=300"
    )
      .then((response) => response.json())
      .then(async (json) => {
        strategy(json);
      });
  }
}

makeSignal();
