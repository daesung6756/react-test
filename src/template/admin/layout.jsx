import Header from './header.jsx';
import SideNav from './side-nav.jsx';
import Footer from './footer.jsx';

import {Outlet} from "react-router-dom";

const AdminLayout = () => {
    return(
        <>
            <Header />
            <main className="container">
                <SideNav />
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default AdminLayout