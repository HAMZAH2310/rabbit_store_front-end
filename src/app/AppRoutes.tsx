import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./Routes"

export default function AppRouter() {
    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    )
}