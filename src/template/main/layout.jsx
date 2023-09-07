import Footer from "./footer.jsx";
import '../../assets/css/template/layout.css'
import Header from "./header.jsx";
import {Outlet} from "react-router-dom";


const MainLayout = (props) => {

    return(
        <>
            <Header />

            <main className="container">
                <div className="content">
                    <Outlet />
                </div>
            </main>

            <Footer />
        </>
    )
}

export default MainLayout