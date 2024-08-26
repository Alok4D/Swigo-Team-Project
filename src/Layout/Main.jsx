import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared-pages/Footer/Footer";
import NavBar from "../Pages/Shared-pages/Navbar/Navber";



const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;