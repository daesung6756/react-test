import '../../assets/css/template/header.css'
import {Link} from "react-router-dom";
import logoImg from "../../assets/images/logo/logo_w.png";

const Header = () => {
    return(
        <div className="header simple">
            <div className="inner">
                <div className="left">
                    <h1><Link to="/" title="현재창이동"><img src={logoImg} /></Link></h1>
                </div>
            </div>
        </div>
    )
}

export default Header