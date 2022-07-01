// import style from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(0);
  const [selcoin, setSelcoin] = useState(0);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => setCoins(json));
    setLoading(false);
  }, []);
  const onMoney = (event) => setMoney(event.target.value);
  const onSelcoin = (event) => setSelcoin(event.target.value);

  useEffect(() => {
    setMoney((current) => current);
  }, [money]);
  useEffect(() => {
    console.log("c");
    setSelcoin((current) => current);
  }, [selcoin]);

  return (
    <div>
      <h1>coin man {coins.length}</h1>
      <hr />
      <div>
        <input value={money} onChange={onMoney} />
        <h3>
          {money > 0 && selcoin > 0
            ? `${(money / (selcoin * 1300)).toFixed(2)}개`
            : null}
        </h3>
        <strong>
          {loading ? (
            "Loading"
          ) : (
            <select onChange={onSelcoin}>
              {coins.map((value) => {
                return (
                  <option key={value.key} value={value.quotes.USD.price}>
                    {value.symbol} $
                    {Math.round(value.quotes.USD.price * 100) / 100}
                  </option>
                );
              })}
            </select>
          )}
        </strong>
      </div>
    </div>
  );
}

export default App;
