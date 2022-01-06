import axios from 'axios';
import { useEffect, useState } from 'react';
import './order.css';

export default function Order() {
    const [stocks, setStocks] = useState([]);
    const [stockMatch, setStockMatch] = useState([]);
    const [text, setText] = useState('');
    const [status, setStatus] = useState('buy');
    const [total, setTotal] = useState('');
    const [price, setPrice] = useState(0);
    const [date, setDate] = useState('');

    useEffect(() => {
        axios.get("http://localhost:90/getStocks")
            .then(res => {
                setStocks(res.data.data)
                console.log(stocks)
            }).catch(err => {
                console.log(err.response)
            })
    }, []);

    const onSuggestionHandler = (text) => {
        setText(text);
        setStockMatch([]);
    }

    const searchStocks = (text) => {
        if (!text) {
            setStockMatch([])
        }
        let matches = stocks.filter((stock) => {
            const regex = new RegExp(`${text}`, "gi");
            return stock.stockName.match(regex)
        })
        setStockMatch(matches)
    }

    const order = (e) => {
        e.preventDefault();

        const data = { stockName: text, price, total, transactionDate: date }
        console.log(data);

        axios.post("http://localhost:90/buySellStock/" + status, data)
            .then(res => {
            }).catch(err => {
                console.log(err)
            });
    }

    return (
        <table className='container'>
            <tr>
                <td><input type="text" placeholder='Enter any script'
                    onChange={(e) => searchStocks(e.target.value)}
                    value={text} />
                </td>
                <td>
                    <input type="text" placeholder='Quantity'
                        onChange={(e) => setTotal(e.target.value)}
                    />
                </td>
                <td>
                    <select onChange={(e) => {
                        const selectedItem = e.target.value;
                        setStatus(selectedItem)
                    }}>
                        <option value="buy">Buy</option>
                        <option value="sell" onClick={(e) => setStatus('sell')}>Sell</option>
                    </select>
                </td>
                <td>
                    <input type="text" placeholder='Price'
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </td>
                <td>
                    <input type="text" placeholder='Transaction Date'
                        onChange={(e) => setDate(e.target.value)}
                    />
                </td>
                <td>
                    <button onClick={order}>Order</button>
                </td>
            </tr>
            {
                stockMatch && stockMatch.map((stock, index) => (
                    <div key={index} className='col-md-12 justify-content-md-center suggestion'
                        onClick={() => onSuggestionHandler(stock.stockName)}>
                        {stock.stockName}
                    </div>
                ))
            }
        </table>
    )
}