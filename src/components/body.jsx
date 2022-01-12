import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './dashboard/dashboard';
import Login from "./login/login";
import Order from './order/order';
import AvailableStocks from "./stocks/availableStock";
import UserStock from './userStock/userStock';

export default function Body() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/stocks" element={<AvailableStocks />} />
                <Route exact path="/order" element={<Order />} />
                <Route exact path="/dashboard" element={<Dashboard />} />
                <Route exact path="/userstock/:id" element={<UserStock />} />
            </Routes>
        </BrowserRouter>
    )
}