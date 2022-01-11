import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function UserStock() {
    const params = useParams();
    const [stock, setStock] = useState([]);
    const [investment, setInvestment] = useState([]);
    const [soldAmount, setSoldAmount] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:90/getEachStock/" + params.id)
            .then(res => {
                setStock(res.data.data.stock[0])
                setInvestment(res.data.data.investment[0])
                setSoldAmount(res.data.data.sold[0])
            }).catch(err => {
                console.log(err.response)
            })
    })
    return (
        <table border='2' className="container">
            <tr>
                <th colSpan={2}>{stock.stockName}</th>
            </tr>
            <tr>
                <td>Total Units: {stock.totalUnits}</td>
                <td>Total Investment: {investment.totalInvestment}</td>
            </tr>
            <tr>
                <td>Sold Amount:{soldAmount.soldAmount} </td>
                <td>Current Amout: {stock.currentAmount} </td>
            </tr>
            <tr>
                <td>Overall Profit:{soldAmount.soldAmount - investment.totalInvestment} </td>
            </tr>
        </table>
    )
}