import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from "./login/login";
import Order from './order/order';
import AvailableStocks from "./stocks/availableStock";

export default function Body() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/stocks" element={<AvailableStocks />} />
                <Route exact path="/order" element={<Order />}/>
            </Routes>
        </BrowserRouter>
    )
}