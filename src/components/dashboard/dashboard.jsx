import { useEffect, useState } from "react"
import axios from 'axios';
import { Link } from 'react-router-dom'

export default function Dashboard() {
    const [stocks, setStocks] = useState([]);
    const [investment, setInvestment] = useState([]);
    const [soldAmount, setSoldAmount] = useState([]);
    const [total, setTotal] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:90/getUserStocks")
            .then(res => {
                setStocks(res.data.data)
            }).catch(err => {
                console.log(err.response)
            })
        axios.get("http://localhost:90/dashboard")
            .then(res => {
                setTotal(res.data.data.total[0]);
                setInvestment(res.data.data.investment[0]);
                setSoldAmount(res.data.data.sold[0]);
                console.log(investment)
            }).catch(err => {
                console.log(err.response)
            })
    }, []);
    return (
        <div>
            <table border='2' className="container">
                <tr>
                    <th colSpan={2}>Dashboard</th>
                </tr>
                <tr>
                    <td>Total Units: {total.total}</td>
                    <td>Total Investment: {investment.totalInvestment}</td>
                </tr>
                <tr>
                    <td>Sold Amount: {soldAmount.soldAmount}</td>
                    <td>Current Amout: {total.currentAmount}</td>
                </tr>
                <tr>
                    <td>Overall Profit: {total.currentAmount - total.total}</td>
                </tr>
            </table>
            <br />
            <table border='2' className="container">
                <tr>
                    <th> Available Stocks</th>
                </tr>
                <tr>
                    <td>Stock Name</td>
                    <td>Quantity</td>
                    <td>Price per Units</td>
                    <td>Total Amount</td>
                </tr>
                {stocks.map((stocks) => (
                    <tr>
                        <td><Link to={'/userstock/' + stocks._id}>{stocks.stockName}</Link></td>
                        <td>{stocks.total}</td>
                        <td>{stocks.price}</td>
                        <td>{stocks.total * stocks.price}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}