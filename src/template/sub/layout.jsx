import Header from "./header.jsx";
import Footer from "./footer.jsx";
import {Outlet} from "react-router-dom";

const SubLayout = () => {
    return (
        <>
            <Header />

            <Outlet />

            <Footer />
        </>
    )
}

export default SubLayout