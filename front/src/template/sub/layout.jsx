import Header from "../common/header.jsx";
import Footer from "../common/footer.jsx";
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