import axios from 'axios';
import { useEffect, useState } from 'react';
import './order.css';

export default function Order() {
    const [stocks, setStocks] = useState([]);
    const [stockMatch, setStockMatch] = useState([]);
    const [text, setText] = useState('')

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

    return (
        <table>
            <tr> <input type="search" placeholder='Enter any script'
                onChange={(e) => searchStocks(e.target.value)}
                value={text} /></tr>
            {stockMatch && stockMatch.map((stock, index) => (
                <div key={index} className='col-md-12 justify-content-md-center suggestion'
                    onClick={() => onSuggestionHandler(stock.stockName)}>
                    {stock.stockName}
                </div>
            ))}
        </table>
    )
}