
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Layout() {
    return (
        <main className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow pb-64">
                <Outlet />
            </div>
            <Footer />
        </main>
    )
}