import Header from "../common/header.jsx";
import Footer from "../common/footer.jsx";
import '../../assets/css/template/layout.css'
import {Outlet} from "react-router-dom";


const MainLayout = () => {

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