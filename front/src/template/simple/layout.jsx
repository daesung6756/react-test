import {Outlet} from "react-router-dom";
import Header from '../common/header.jsx'
import Footer from '../common/footer.jsx'

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )

}

export default Layout