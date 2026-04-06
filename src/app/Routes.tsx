import { Route, Routes } from "react-router-dom";
import Dashboard from "@/pages/Dashboard";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import PrivateRoute from "./PrivateRoute";

export default function AppRoutes() {
    return (
        <Routes>
            {/*Private Route */}
            <Route element={<PrivateRoute />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    )
}