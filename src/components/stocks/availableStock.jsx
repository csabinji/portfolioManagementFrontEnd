import './stocks.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function AvailableStocks() {
    const [stocks, setStocks] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:90/transactionHistory")
            .then(res => {
                setStocks(res.data.data)
            }).catch(err => {
                console.log(err.response)
            })
    }, []);

    return (
        <div className="container">
            <table border='1'>
                <tr>
                    <th>Stock Name</th>
                    <th>Transaction Type</th>
                    <th>Quantity</th>
                    <th>Amount</th>
                    <th>Transaction Date</th>
                </tr>
                {stocks.map((stocks) => (
                    <tr>
                        <td>{stocks.stockId.stockName}</td>
                        <td>{stocks.status}</td>
                        <td>{stocks.total}</td>
                        <td>{stocks.price}</td>
                        <td>{stocks.transactionDate}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}