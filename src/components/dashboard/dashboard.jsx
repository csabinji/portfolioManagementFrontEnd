import { useEffect, useState } from "react"
import axios from 'axios';

export default function Dashboard() {
    const [stocks, setStocks] = useState([]);
    const [investment, setInvestment] = useState([]);
    const [soldAmount, setSoldAmount] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:90/dashboard")
            .then(res => {
                setStocks(res.data.data.total[0]);
                setInvestment(res.data.data.investment[0]);
                setSoldAmount(res.data.data.sold[0]);
                console.log(investment)
            }).catch(err => {
                console.log(err.response)
            })
    }, []);
    return (
        <table border='2' className="container">
            <tr>
                <th colSpan={2}>Dashboard</th>
            </tr>
            <tr>
                <td>Total Units: {stocks.total}</td>
                <td>Total Investment: {investment.totalInvestment}</td>
            </tr>
            <tr>
                <td>Sold Amount: {soldAmount.soldAmount}</td>
                <td>Current Amout: {stocks.currentAmount}</td>
            </tr>
            <tr>
                <td>Overall Profit: {stocks.currentAmount - stocks.total}</td>
            </tr>
        </table>
    )
}