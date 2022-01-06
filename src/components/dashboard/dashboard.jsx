export default function Dashboard() {
    return (
        <table border='2' className="container">
            <tr>
                <th colSpan={2}>Dashboard</th>
            </tr>
            <tr>
                <td>Total Units: 100</td>
                <td>Total Investment: 54200</td>
            </tr>
            <tr>
                <td>Sold Amount: 100</td>
                <td>Current Amout: 54200</td>
            </tr>
            <tr>
                <td>Overall Profit: 5482</td>
            </tr>
        </table>
    )
}